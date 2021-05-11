import Vue from "vue";
import { route, router } from "../../router";

const state = {
    products: []
}

const getters = {
    getProducts(state) {
        return state.products;
    },
    getProduct(state) {
       return key => state.products.filter(element => {
             return element.key == key;
       })
    }
}
//Güncelleme işlemi yapmak
const mutations = {
    updateProductList(state, product) {
        state.products.push(product);
    }
}
const actions = {
    initApp({ commit }) {
        //apiye istek atma
        Vue.http.get("https://urun-islemleri-prop-default-rtdb.firebaseio.com/products.json")
            .then((response) => {
                console.log(response);
                let data = response.body;
                for(let key in data){
                   data[key].key = key;
                   commit("updateProductList", data[key]);
                }
            })
    },
    saveProduct({ dispatch, commit, store }, product) {
        //api
        Vue.http.post("https://urun-islemleri-prop-default-rtdb.firebaseio.com/products.json", product)
            .then((response) => {
                //Ürün Listesinin Güncellenmesi

                product.key = response.body.name;
                commit("updateProductList", product);
                // console.log(state.products);
                let tradeResult = {
                    purchase: product.price,
                    sale: 0,
                    count: product.count
                }
                dispatch("setTradeResult", tradeResult);
                router.replace("/");
            })
    },

    sellProduct({ state,commit,dispatch }, payload) {
        //api //ürün çıkışı yapma , ürün satışı yapma
        let product =state.products.filter(element => {
            return element.key == payload.key;
        })
        //satılmış ürün adeti : totalcount
        let totalCount = product[0].count - payload.count;
        Vue.http.patch("https://urun-islemleri-prop-default-rtdb.firebaseio.com/products/"+payload.key+".json", {count : totalCount})
        .then(response => {
            console.log(response);
            product[0].count =totalCount;

            let tradeResult = {
                purchase: 0,
                sale: product[0].price,
                count: payload.count
            }

            dispatch("setTradeResult", tradeResult);
            router.replace("/");
        })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
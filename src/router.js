import Vue from "vue";
import ProductList from "./Components/products/ProductList.vue";
import ProductShell from "./Components/products/ProductSell.vue";
import ProductPurchase from "./Components/products/ProductPurchase.vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
    { path: "/", component: ProductList },
    { path: "/urun-islemleri", component: ProductPurchase },
    { path: "/urun-cikisi", component: ProductShell },
    { path: "*" , redirect : "/" }
]
export const router = new VueRouter({
    mode: "history",
    routes
})
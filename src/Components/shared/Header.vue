<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark"
    style="background-color: #563f7a"
  >
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link 
        active-class="active" 
        to="/" 
        tag="li" 
        class="nav-brand">
          <a class="nav-link"> Ürün Listesi</a>
        </router-link>
        
        
        <router-link active-class="active" to="/urun-islemleri" tag="li" class="nav-item">
          <a class="nav-link"> Ürün İşlemleri</a>
        </router-link>
        <router-link active-class="active" to="/urun-cikisi" tag="li" class="nav-item">
          <a class="nav-link"> Ürün Çıkışı</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>
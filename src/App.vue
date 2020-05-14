<template>
  <div id="wrap">
    <!--头部组件开始-->
    <Header></Header>
    <!--头部组件结束-->

    <!--中间路由视图开始-->
    <div id="main-container" class="container main-container">
      <router-view/>
    </div>
    <!--中间路由视图结束-->

    <!--脚步开始-->
    <Footer></Footer>
    <!--脚步结束-->
  </div>
</template>

<script>

  /* 引用组件 */
  import Header from "@/views/layouts/Header";
  import Footer from "@/views/layouts/Footer";


  export default {
    name: 'App',
    /* 注册组件 */
    components: {
      Header,
      Footer
    }
  }
</script>

<style lang="scss">
  $container-large-desktop: 1200px;
  $btn-primary-bg: #00b5ad;
  $btn-primary-border: #00b5ad;
  $label-primary-bg: #00b5ad;
  $pagination-active-bg: #00b5ad;
  $pagination-active-border: #00b5ad;
  $pagination-color: #00b5ad;
  $input-border-focus: #00b5ad;
  $link-color: #12c4c5;
  $link-hover-color: #22ddde;
  $icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
  $fa-font-path: "~font-awesome/fonts/";


  @import "~bootstrap-sass/assets/stylesheets/_bootstrap";
  @import "~font-awesome/scss/font-awesome";
  @import "./src/assets/css/main";
  @import "./src/assets/css/extra";
</style>

<template>
  <div class="navbar navbar-default topnav">
    <div class="container">
      <div class="navbar-header">

        <button type="button" class="navbar-toggle" @click="changeShowNav">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>

        <router-link to="/" class="navbar-brand">
          <span class="title">{{logo.title}}</span>
          <img src="@/assets/logo.png" :alt="logo.title">
        </router-link>
      </div>

      <div id="top-navbar-collapse" :class="['collapse', 'navbar-collapse', { in: showNav }]">
        <ul class="nav navbar-nav">
          <!--v-for 使用 item in items 形式的特殊语法，items 是源数组的别名，对应我们这里的 navList，item 是数组元素的别名，你可以使用其他适合的名称-->
          <li v-for="(item , index) in navList" :class="{active : index === activeNavIndex }">
            <a href="#" @click="changeActiveNavIndex(index)">{{item}}</a>
          </li>
        </ul>


        <div class="navbar-right">
          <Entry/>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
  import Entry from "@/views/layouts/Entry";

  export default {
    name: "Header",
    components: {
      Entry
    },
    /* 返回的数据 */
    data() {
      return {
        logo: {
          title: 'Vue js'
        },
        navList: ['社区', '头条', '问答', '教程'],
        activeNavIndex: 0,
        showNav: false,
      }
    },

    /* 在展示之前创建 */
    beforeCreate() {

    },

    /* 定义的方法 */
    methods: {

      /**
       * 修改 activeNavIndex 属性的方法
       * @param data
       */
      changeActiveNavIndex(data) {
        this.activeNavIndex = data;
      },

      changeShowNav() {
        this.showNav = !this.showNav
      }
    }

  }
</script>

<!-- scoped则样式只在当前组件起作用 -->
<style scoped>
  .title {
    display: none;
  }

  .navbar-default .navbar-nav > .active > a {
    background: rgba(0, 0, 0, .03);
  }
</style>

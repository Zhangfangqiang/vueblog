<template>
  <div class="navbar-right">
    <!--如果登录开始-->
    <ul v-if="auth" class="nav navbar-nav github-login">
      <li>
        <a v-dropdown href="javascript:;">
          <span v-if="user">
            <img v-if="user.avatar" :src="`/${user.avatar}`" class="avatar-topnav">
            <span v-if="user.user_nickname">{{ user.user_nickname }}</span>
          </span>
          <span v-else>佚名</span>
          <span class="caret"></span>
        </a>
        <ul class="dropdown-menu">
          <li><a href="#" @click="logout"><i class="fa fa-sign-out text-md"></i>退出</a></li>
        </ul>
      </li>
    </ul>
    <!--如果登录结束-->

    <!--如果没有登录开始-->
    <div v-else class="nav navbar-nav github-login">
      <router-link to="/auth/login" class="btn btn-default login-btn">
        <i class="fa fa-user"></i> 登 录
      </router-link>
      <router-link to="/auth/register" class="btn btn-default login-btn">
        <i class="fa fa-user-plus"></i> 注 册
      </router-link>
    </div>
    <!--如果没有登录结束-->
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Entry',
    data(){
      return{

      }
    },
    /*添加计算属性选项*/
    computed:{
      /*使用对象展开运算符，将 mapState 对象混入到计算属性之中*/
      ...mapState([
        'auth',   /*映射 this.auth 为 store.state.auth*/
        'user',   /*映射 this.user 为 store.state.user*/
        'token',  /*映射 this.token 为 store.state.token*/
      ])
    },
    methods:{
      logout(){
        this.$store.dispatch('logout')
      }
    }
  }
</script>

<style scoped>
</style>

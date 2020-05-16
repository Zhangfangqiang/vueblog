<template>
  <div class="row">
    <div class="col-md-4 col-md-offset-4 floating-box">

      <!--全局消息组件开始-->
      <Message :show.sync="msgShow" :type="msgType" :msg="msg"/>
      <!--全局消息组件结束-->

      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">请登录</h3>
        </div>

        <div class="panel-body" data-validator-form>
          <div class="form-group">
            <label class="control-label">用户名</label>
            <input v-validator:input.required="{ regex: /^1[3456789]\d{9}$/, error: '请输入正确的手机号' }" v-model="username" type="text" class="form-control" placeholder="请填写用户名">
          </div>

          <div class="form-group">
            <label class="control-label">密码</label>
            <input id="password" v-validator.required="{ regex: /^\w{6,16}$/, error: '密码要求 6 ~ 16 个单词字符' }" v-model="password" type="password" class="form-control" placeholder="请填写密码">
          </div>

          <button type="submit" class="btn btn-lg btn-success btn-block" @click="login">
            <i class="fa fa-btn fa-sign-in"></i> 登录
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        username : '',   /*用户名*/
        password : '',   /*密码*/
        msg      : '',   /*消息*/
        msgType  : '',   /*消息类型*/
        msgShow  : false /*是否显示消息，默认不显示*/
      }
    },
    beforeCreate() {
    },
    created() {

    },
    methods: {

      /**
       * 点击登录
       * @param e
       */
      login(e) {
        /* 延迟一下让数据先验证一会 */
        setTimeout(() => {
          const target = e.target.type === 'submit' ? e.target : e.target.parentElement

          if (target.canSubmit) {
            const user = {
              username    : this.username,
              password    : this.password,
              device_type : 'web'
            }

            axios.post('/api/user/public/login', user)
              .then(response => {
                this.showMsg(response.data.msg);

                /* 将登录的信息存储起来 */
                if (response.data.code == 1) {
                  this.$store.dispatch('login', response.data.data)
                }
              })
              .catch(error => {

              });
          }
        })
      },
      showMsg(msg, type = 'warning') {
        this.msg     = msg
        this.msgType = type
        this.msgShow = false

        this.$nextTick(() => {
          this.msgShow = true
        })
      }
    }
  }
</script>

<style scoped>
  .thumbnail {
    width: 170px;
    margin-top: 10px;
    cursor: pointer;
  }

  .thumbnail .captcha {
    height: 46px;
    background: #E1E6E8;
  }

  .captcha {
    font-size: 24px;
    font-weight: bold;
    user-select: none;
  }
</style>

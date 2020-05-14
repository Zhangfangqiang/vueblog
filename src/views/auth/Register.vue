<template>
  <div class="row">
    <div class="col-md-4 col-md-offset-4 floating-box">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">请注册</h3>
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
          <div class="form-group">
            <label class="control-label">确认密码</label>
            <input v-validator.required="{ target: '#password' }" v-model="cpassword" type="password" class="form-control" placeholder="请填写确认密码">
          </div>

          <div class="form-group">
            <label class="control-label" style="display: block;">短信验证码</label>
            <input v-validator.required="{ title: '短信验证码' }" v-model="verification_code" type="text" class="form-control" placeholder="请填写验证码" style="width: 60%;display: inline-block;">
            <button type="button" class="btn btn-success" @click="getVerificationCode" style="width: 40%;display: inline-block;">获取验证码</button>
          </div>

          <button type="submit" class="btn btn-lg btn-success btn-block" @click="register">
            <i class="fa fa-btn fa-sign-in"></i> 注册
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import router       from '../../router'                          /*引入路由*/

  export default {
    name: "Register",
    data() {
      return {
        username          : '',     /*用户名*/
        password          : '',     /*密码*/
        cpassword         : '',     /*确认密码*/
        verification_code : ''      /*验证码*/
      }
    },
    beforeCreate() {
    },
    created() {

    },
    methods: {

      /**
       * 点击注册
       * @param e
       */
      register(e) {
        setTimeout(() => {
          const target = e.target.type === 'submit' ? e.target : e.target.parentElement

          if (target.canSubmit) {
            const user = {
              username         : this.username,
              password         : this.password,
              verification_code: this.verification_code
            }

            axios.post('/api/user/public/register', user)
              .then(response => {
                alert(response.data.msg);

                if (response.data.code == 1) {
                  router.push('/auth/login')
                }
              })
              .catch(error => {

              });

          }
        })
      },

      /**
       * 获取验证码的方法
       */
      getVerificationCode() {
        const user = {
          username : this.username,
          type     : 'register'
        }
        axios.post('/api/user/verification_code/sendRE',user)
          .then(response => {
            if (response.data.code == 1) {
              alert(response.data.msg);
            } else {
              alert(response.data.msg);
            }
          })
          .catch(error => {

          });
      },
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

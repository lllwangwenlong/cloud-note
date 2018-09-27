<template>
  <div class="userbox">
    <input class="input mb30" type="text" v-model="formData.email" placeholder="邮箱">
    <input class="input mb30" type="password" v-model="formData.password" placeholder="密码">
    <el-button class="btn mb30" type="primary" @click="handleLogin">登录</el-button>
    <el-button class="btn mb30">注册</el-button>
  </div>
</template>

<script>
    export default {
      data () {
        return {
          formData: {
            email: '',
            password: ''
          }
        }
      },
      methods: {
        handleLogin () {
          this.$axios.post('/login',this.formData).then(res => {
            console.log(res)
          })
        }
      }
    }
</script>

<style scoped lang="scss">
.userbox {
  width: 360px;
  height: 340px;
  padding: 50px 30px 20px 30px;
  box-sizing: border-box;
  background-color: #fff;

  .input {
    width: 300px;
    height: 40px;
    border: 1px solid #f1f1f1;
    padding: 0 15px;
    box-sizing: border-box;
  }

  .btn {
    width: 100%;
  }
}
</style>

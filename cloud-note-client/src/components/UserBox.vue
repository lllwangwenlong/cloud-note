<template>
  <div class="userbox flr">
    <div class="login-box" v-if="!userInfo.username">
      <div class="input-wrap mb30">
        <input class="input" type="text" v-model="formData.email" placeholder="邮箱">
      </div>
      <div class="input-wrap mb30">
        <input class="input" type="password" v-model="formData.password" placeholder="密码" @keyup.enter="handleLogin">
      </div>
      <div class="btn-wrap mb30">
        <el-button type="primary" @click="handleLogin">登录</el-button>
      </div>
      <div class="btn-wrap mb30">
        <el-button @click="$router.push('/register')">注册</el-button>
      </div>
    </div>
    <div class="user-msg-box" v-else>
      <div class="img-wrap">
        <img :src="userInfo.avatar">
      </div>
      <div class="username">
        用户:{{userInfo.username}}
      </div>
      <div class="logout-wrap">
        <el-button @click="handleLogout">
          退出登录
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
      data () {
        return {
          formData: {
            email: 'wwlong@qq.com',
            password: '123456'
          }
        }
      },
      methods: {
        handleLogin() {
          this.$axios.post('/login',this.formData).then(res => {
            if(res.code == 200) {
              this.$store.commit('CHANGE_USERINFO',res.data)
              console.log(this.$store.state)
              this.$message.success(res.msg)
            }else {
              this.$message.error(res.msg)
            }
          })
        },
        handleLogout() {
          this.$axios.get('/logout').then(res => {
            let userInfo = {
              avatar: '',
              email: '',
              username: ''
            }
            if(res.code == 200) {
              this.$message.success(res.msg)
              this.$store.commit('CHANGE_USERINFO', userInfo)//清空vuex中保留的用户信息
              this.$router.push('/index')
            }else { //未登录状态
              this.$store.commit('CHANGE_USERINFO', userInfo)//清空vuex中保留的用户信息
              this.$message.error('登录已过期,自动退出登录')
            }
          })
        }
      },
      computed: {
        ...mapState(['userInfo'])
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

  .input-wrap {
    width: 300px;
    height: 40px;

    .input {
      padding: 0 15px;
      width: 100%;
      height: 100%;
      border: 1px solid #f1f1f1;
      box-sizing: border-box;
      outline: none;
    }
  }

  .btn-wrap {
    /deep/ .el-button {
      width: 100%;
    }
  }

  .user-msg-box {//用户信息盒子
    .img-wrap{
      width: 150px;
      height: 150px;
      margin: 0px auto 20px;

      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }

    .username {
      font-size: 16px;
      font-weight: 400;
      text-align: center;
      color: #444;
    }

    .logout-wrap {
      /deep/ .el-button {
        display: block;
        font-size: 14px;
        width: 100px;
        margin: 20px auto;
        background-color: #f1f1f1;
      }
    }
  }
}
</style>

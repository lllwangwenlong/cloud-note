<template>
    <div class="register">
      <div class="title">
        新用户注册
      </div>
      <div class="input-wrap">
        <el-input  type="text" v-model="formData.username" placeholder="用户名">
        </el-input>
      </div>
      <div class="input-wrap">
        <el-input  type="text" v-model="formData.email" placeholder="邮箱">
        </el-input>
      </div>
      <div class="input-wrap">
        <el-input  type="password" v-model="formData.password" placeholder="密码">
        </el-input>
      </div>
      <div class="btn-wrap">
        <el-button type="primary" @click="handleRegister">
          注册
        </el-button>
      </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          formData: {
            username: '',
            password: '',
            email: ''
          }
        }
      },
      methods: {
        handleRegister () {
          this.$axios.post('/user', this.formData).then(res => {
            if(res.code == 200) {
              console.log(res.data)
              this.$message.success(res.msg);
              this.$router.push('/index')
            }else {
              this.$message.error(res.msg);
            }
          })
        }
      }
    }
</script>

<style scoped lang="scss">
.register {
  width: 750px;
  margin: 80px auto 0;
  padding: 40px;
  background-color: #fff;
  border-radius: 6px;

  .title {
    text-align: center;
    font-size: 20px;
    color: #333;
    font-weight: 500;
    margin-bottom: 30px;
  }

  .input-wrap {
    width: 390px;
    height: 40px;
    margin: 0 auto 30px;

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
    width: 390px;
    margin: 0 auto;

    /deep/ .el-button {
      width: 100%;
    }
  }
}
</style>

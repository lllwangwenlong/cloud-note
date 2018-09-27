<template>
  <div class="header">
    <div class="header-content  w1170 clearfix">
      <div class="header-title fll">
        <a href="">云笔记</a>
      </div>
      <div  class="btn-wrap flr">
        <el-button>
          写笔记
        </el-button>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name: "Header"
    }
</script>

<style scoped lang="scss">
  .header {
    height: 50px;
    background-color: #409eff;

    .header-content {
      height: 50px;
      margin: 0 auto;

      .header-title a {
        display: block;
        font-size: 26px;
        color: #fff;
        font-weight: 400;
        margin-top: 5px;
        text-decoration: none;
      }

      .btn-wrap {
        margin-top: 5px;
      }
    }
  }
</style>

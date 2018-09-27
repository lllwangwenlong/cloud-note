<template>
    <div class="banner fll">
      <div class="banner-title">
        十三亿人都在看的劲爆动漫
      </div>
    </div>
</template>

<script>
    export default {
        name: "Banner"
    }
</script>

<style scoped lang="scss">
  .banner {
    position: relative;
    width: 750px;
    height: 340px;
    background: url("/static/imgs/tupian.jpg");
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;

    .banner-title {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      font-size: 20px;
      color: #fff;
      padding: 10px 15px;
      background-color: rgba(0,0,0,.5);
    }
  }
</style>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #f1f1f1;
}
.w1170 {
  width: 1170px;
  margin: 0 auto;
}
.fll {
  float: left;
}
.flr {
  float: right;
}
.clearfix::after {
  content: '';
  display: block;
  width: 0;
  height: 0;
  clear: both;

}
.mb30 {
  margin-bottom: 30px;
}
</style>

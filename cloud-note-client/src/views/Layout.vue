<template>
  <div class="layout">
    <Header></Header>
    <div class="w1170 content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
    import Header from '@/components/Header'
    export default {
        components: {
          Header,
        },
        name: "Layout"
    }
</script>

<style scoped>
.content {
  margin-top: 50px;
}
</style>

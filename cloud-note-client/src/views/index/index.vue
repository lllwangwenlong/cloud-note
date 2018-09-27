<template>
    <div class="content clearfix">
      <div class="fll">
        <Banner></Banner>
      </div>
      <div class="flr">
        <UserBox></UserBox>
      </div>
    </div>
</template>

<script>
    import Banner from '@/components/Banner'
    import UserBox from '@/components/UserBox'
    export default {
      name: "index",
      components: {
        Banner,
        UserBox
      }
    }
</script>

<style scoped>

</style>

<template>
    <div class="w1170">
      <div class="clearfix">
        <Banner></Banner>
        <UserBox></UserBox>
      </div>
      <Article></Article>
    </div>
</template>

<script>
    import Banner from '@/components/Banner'
    import UserBox from '@/components/UserBox'
    import Article from '@/components/Article'
    export default {
      data() {
        return {
          content: []
        }
      },
      components: {
        Banner,
        UserBox,
        Article
      },
    }
</script>

<style scoped>

</style>

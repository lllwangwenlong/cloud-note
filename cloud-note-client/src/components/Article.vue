<template>
    <div class="article">
      <router-link :to="{name: 'article', query:{id: item._id}}" class="article-item"
                   v-for="(item,index) in content" :key="index">
        <div class="article-msg clearfix">
          <div class="article-avatar fll">
            <img :src="item.author.avatar" alt="">
          </div>
          <div class="author-msg fll">
            <div class="row1">
              <span class="author-name" v-text="item.author.username">

              </span>
              <span class="divide">
              |
              </span>
              <span class="author-title" v-text="item.title">

              </span>
            </div>
            <div class="row2">
            <span class="strong">
              浏览: <span v-text="item.readnumber"></span>
            </span>
            <span class="strong">
              回复: <span v-text="item.commonnum"></span>
            </span>
            <span class="strong">
              分类: <span v-text="item.category.name"></span>
            </span>
            </div>
          </div>
        </div>
        <div class="article-content" v-text="item.contentText">

        </div>
      </router-link>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        content: []
      }
    },
    methods: {
      getData() {
        this.$axios.get('/article').then(res => {
          this.content = res.data
        })
      }
    },
    created() {
      this.getData()
    }
  }
</script>

<style scoped lang="scss">
  .article {
    width: 750px;
    margin-top: 30px;
    background-color: #fff;
    border-radius: 6px;
    overflow: hidden;
  }

  .article .article-item {
    display: block;
    color: #333;
    padding: 24px;
    text-decoration: none;
    background-color: #fff;

    .article-avatar {
      width: 70px;
      height: 70px;

      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }

    .author-msg {
      margin-left: 15px;
      width: 615px;
    }

    .row1 {
      line-height: 24px;
      margin-top: 5px;

      .author-name {
        font-size: 18px;
        font-weight: 700;
        color: #409eff;
      }
    }

    .row2 {
      height: 26px;
      line-height: 26px;
      color: #fff;
      margin-top: 5px;
      padding-left: 5px;
      background-color:#bbb;
      border-radius: 4px;
    }
  }
</style>

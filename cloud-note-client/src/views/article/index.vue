<template>
    <div class="article">
      <div class="author-msg clearfix" v-if="content.author">
        <div class="img-wrap fll">
          <img :src="content.author.avatar">
        </div>
        <div class="author-details fll">
          <div class="row1">
            {{content.author.username}}
          </div>
          <div class="row2">
            <span class="format-data">
              {{content.updateTime}}
            </span>
            <span>
              阅读 {{content.readnumber}}
            </span>
          </div>
        </div>
      </div>
      <div class="title">
        <h1>{{content.title}}</h1>
      </div>
      <div class="content html" v-html="content.content">

      </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          content: {}
        }
      },
      methods: {
        getData() {
          let id = this.$route.query.id
          this.$axios.get(`/article/${id}`).then(res => {
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
  width: 980px;
  margin: 50px auto 0;
  box-sizing: border-box;
  background: #fff;
  border-radius: 6px;
  padding: 60px 40px;
}

  .img-wrap {
    width: 50px;
    height: 50px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .author-details {
    margin-left: 15px;

    .row1 {
      padding: 2px 0;
      font-size: 16px;
      font-weight: 700;
      color: #333;
    }

    .row2 {
      font-size: 14px;
      color: #555;

      .format-data {
        margin-right: 6px;
      }
    }
  }
</style>

<template>
  <div id="recommend">
    <div v-for="(item,index) in recommend" class="rec-item">
      <div class="rec-img"><img :src="item.image" alt=""></div>
      <div class="rec-text">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Recommend",
    data(){
      return {
        recommend:[
          {
            title: "私人FM",
            image: require("assets/img/recommend/music-radio.png")
          },
          {
            title: "每日推荐",
            image: require("assets/img/recommend/music-radio.png")
          },
          {
            title: "歌单",
            image: require("assets/img/recommend/music-menu.png")
          },
          {
            title: "排行",
            image: require("assets/img/recommend/rank.png")
          }
        ]
      }
    }
  }
</script>

<style scoped>
#recommend{
  height: 110px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 0 7px 0;
  border-bottom: 1px solid #eee;
}
  .rec-item{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .rec-img{
    width: 57px;
    height: 57px;
    background-color: #ec493d;
    border-radius: 50%;
    text-align: center;
    line-height: 57px;
  }
  .rec-img img{
    width: 35px;
    vertical-align: middle;
  }
  .rec-text{
    margin-top: 8px;
    font-size: 14px;
  }
</style>
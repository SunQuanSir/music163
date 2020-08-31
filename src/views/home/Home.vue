<template>
  <div>
    <tab-bar :tab="tabContent"/>
    <Scroll class="content" ref="scroll">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功">
        <swiper :images="swipeImg"/>
        <recommend/>
        <song ref="song"/>
        <new-play/>
      </van-pull-refresh>
    </Scroll>
  </div>
</template>

<script>
  import Scroll from "components/common/Scroll";
  import TabBar from "components/TabBar";
  import Swiper from "components/common/Swiper";
  import Recommend from "./Recommend";
  import Song from "./Song";
  import NewPlay from './NewPlay'
  import {PullRefresh} from "vant"

  import {getSwipeImg} from "network/api";

  export default {
    name: "Home",
    data() {
      return {
        tabContent: ['推荐', '歌曲', '排行'],
        swipeImg: [],
        isLoading:false
      }
    },
    components: {
      TabBar,
      Swiper,
      Recommend,
      Song, NewPlay, Scroll,
      [PullRefresh.name]: PullRefresh
    },
    mounted() {
      this.getSwipe()
      this.initScroll()
    },
    activated() {
      this.initScroll()
    },
    methods: {
      async getSwipe() {
        const {data: res} = await getSwipeImg()
        this.swipeImg = res.banners
      },
      initScroll() {
        this.$nextTick(() => {
          this.$refs.scroll.scroll.refresh()
        })
      },
      onRefresh(){
        setTimeout(()=>{
          let n1=Math.ceil(Math.random()*53)
          this.$refs.song.getSongData(n1,n1+6)
          this.isLoading=false
          this.initScroll()
        },1000)
      }
    }
  }
</script>

<style scoped>
  .content {
    position: absolute;
    top: 89px;
    bottom: 49px;
    left: 0;
    right: 0;
    z-index: -1;
  }
</style>
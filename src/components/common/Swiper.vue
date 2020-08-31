<template>
  <van-swipe class="my-swipe" :autoplay="4000" indicator-color="white">
    <van-swipe-item v-for="item in images" :key="item.scm">
      <img :src="item.imageUrl" alt="">
    </van-swipe-item>
  </van-swipe>
</template>

<script>
  import {Swipe, SwipeItem} from 'vant';

  export default {
    name: "Swiper",
    props: {
      images: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      [Swipe.name]:Swipe,
      [SwipeItem.name]:SwipeItem
    }
  }
</script>

<style scoped>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    text-align: center;
    background: url("~assets/img/bgc/bgc.png") no-repeat;
  }
  img{
    width: 96%;
    height: 100%;
    border-radius: 10px;
  }
</style>
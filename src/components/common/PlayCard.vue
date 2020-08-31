<template>
  <div id="card" @click="cardClick">
    <img :src="img" alt="" class="card-img">
    <div class="card-text">{{name}}</div>
    <div class="card-count">
      <img src="~assets/img/author/headphones.png" alt="">
      {{count}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "PlayCart",
    props: ["id", "img", "name", "playcount"],
    computed:{
      count(){
        return (this.playcount / 10000).toFixed()+'万'
      }
    },
    methods:{
      cardClick(){
        this.$router.push('/playlist/'+this.id)
      }
    }
  }
</script>

<style scoped>
#card{
  width: 32%;
  padding-bottom: 10px;
  text-align: center;
  position: relative;
}
  .card-img{
    width: 100%;
    border-radius: 10px;
  }
  .card-text{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-top: 5px;
    font-size: 13px;
  }
  .card-count{
    position: absolute;
    right: 5px;
    top: 5px;
    color: #fff;
    font-size: 12px;
  }
  .card-count img{
    width: 12px;
    height: 12px;
  }
</style>
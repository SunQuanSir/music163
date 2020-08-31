<template>
  <div id="detail-nav">
    <div @click="back"><span class="iconfont back">&#xe63f;</span></div>
    <div class="title">
      <div class="box1">{{name}}</div>
      <div class="box2">{{description}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailNavBar",
    props:["description","changeContext","name"],
    methods:{
      back(){
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
#detail-nav{
  height: 44px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  background: #fff;
  position: fixed;
  top:0;left: 0;right: 0;
}
.back{
  font-size: 20px;
  color: #e5473b;
  padding-left: 3px;
}
  .title{
    width: 70%;
    margin-left:10%;
  }
  .box1{
    margin-top: 5px;
    opacity: .8;
    font-size: 15px;
  }
  .box2{
    margin-top: 7px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 12px;
    opacity: .5;
  }
</style>
<template>
  <div id="tab-bar">
    <div v-for="(item,index) in tab"
        @click="itemClick(index)"
        class="tab-item" :class="{active:currentIndex==index}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBar",
    props:{
      tab:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        currentIndex:0
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex=index
      }
    }
  }
</script>

<style scoped>
#tab-bar{
  height: 45px;
  width: 100%;
  background: #e5473b;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  z-index: 999;
}
.tab-item{
  color:#fff;
  padding: 0 2px 5px 2px;
  opacity: .7;
}
  .active{
    border-bottom: 1.5px solid #fff;
    opacity: 1;
  }
</style>
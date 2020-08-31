<template>
  <div id="app">
    <NavBar v-if="isnav"/>
    <mini-player/>
    <keep-alive exclude="PlayList">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  import NavBar from "./components/NavBar";
  import MiniPlayer from "./components/MiniPlayer";
  export default {
    data(){
      return{
        isnav:true
      }
    },
    components:{
      NavBar,MiniPlayer
    },
    watch:{
      $route(e){
        if(e.params.id){
          this.isnav=false
        }else{
          this.isnav=true
        }
      }
    }
  }
</script>

<style>

</style>

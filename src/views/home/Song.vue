<template>
  <div id="song">
    <div class="h1">推荐歌单 → </div>
    <div class="playcard" v-if="list.length">
      <playCard v-for="item in list"
                :desc="item.copywriter"
                :id="item.id"
                :img="item.picUrl"
                :key="item.id"
                :name="item.name"
                :playcount="item.playCount"
      />
    </div>
  </div>
</template>

<script>
  import PlayCard from "components/common/PlayCard";
  import {getPersonalized} from "network/api";

  export default {
    name: "Song",
    data(){
      return{
        list:[]
      }
    },
    components:{
      PlayCard
    },
    created() {
      this.getSongData(0,6)
    },
    methods: {
      async getSongData(n1,n2) {
        const {data: res} =await getPersonalized({limit:60})
        this.list=res.result.slice(n1,n2)
      }
    }
  }
</script>

<style scoped>
  #song {
    margin-top: 10px;
  }

  .h1 {
    border-left: 1px solid red;
    padding:0 0 8px 8px;
    font-size: 18px;
    font-family: '楷体';
    font-weight: 500;
  }

  .playcard {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
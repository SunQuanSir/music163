<template>
  <div id="new-play">
    <div class="h1">最新音乐 →</div>

    <div class="wrapper" ref="wrapper">
      <div class="content" ref="content">
        <div class="listitem" v-for="item in newSongList" ref="listitem" :key="item.id">
          <img :src="item.picUrl + '?param=200y200'" alt />
          <span class="listitemspan">{{item.name}}</span>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  import BScroll from "better-scroll"
  import {getPersonalizedNewSong} from "network/api"
  import PlayCard from "components/common/PlayCard";

  export default {
    name: "NewPlay",
    data() {
      return {
        scroll: null,
        newSongList: []
      }
    },
    components: {PlayCard, BScroll},
    async created() {
      const {data: {result: res}} = await getPersonalizedNewSong()
      this.newSongList = res
      this.$nextTick(() => {
        this.initScroll()
      })
    },
    activated() {
      this.initScroll()
    },
    methods: {
      initScroll() {
        let width = 0;
        for (let i = 0; i < this.newSongList.length; i++) {
          width += this.$refs.listitem[0].offsetWidth + 8; //getBoundingClientRect() 返回元素的大小及其相对于视口的位置
        }
        this.$refs.content.style.width = width + "px";

        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.wrapper, {
              startX: 0,
              click: true,
              scrollX: true,
              scrollY: false,
              eventPassthrough: "vertical"
            });
          } else {
            this.scroll.refresh();
          }
        })

      }
    }
  }
</script>

<style scoped>
  #new-play {
    margin-top: 10px;
  }

  .wrapper {
    overflow: hidden;
    touch-action: none
  }

  .content {
    display: flex;
    align-items: center;
    height: 41.667vw;
  }

  .h1 {
    border-left: 1px solid red;
    padding: 0 0 8px 8px;
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

  img {
    width: 100%;
  }
  .listitem {
    margin: 0 4px;
  }
  .listitem img {
    width: 100%;
    border-radius: 8px;
  }
  .listitemspan {
    font-size: 3.333vw;
    overflow: hidden;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    white-space: nowrap;
    width: 29.167vw;
    display: block;
  }
</style>
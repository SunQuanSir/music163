<template>
  <div id="playlist">
    <detail-nav-bar :description="playlist.description"
                    :changeContext="changeContext"
                    :name="playlist.name"/>
    <Scroll class="content" >
      <authors class="authors"
               :coverimg="playlist.coverImgUrl"
               :name="playlist.name"
               :creator="playlist.creator"
               :shareCount="playlist.shareCount"
               :playcount="playlist.playCount"
               :description="playlist.description"
               :commentCount="playlist.commentCount"/>

      <div class="playall" ref="playlist">
        <span class="songlength">播放全部 (共{{songs.length}}首)</span>
        <span class="collect">+ 收藏({{playlist.subscribedCount}})</span>
      </div>

      <div class="songslist"
           v-for="(item,index) in songs"
           :key="index"
           :class="{active:currentIndex==index}">
        <div class="songswrapper" @click.stop="playAudio(item,index)">
          <div class="songsinfo">
            <div class="songtitle">{{item.name}} {{item.alia[0]}}</div>
            <div class="singer" :class="{active:currentIndex===index}">
              {{item.ar[0].name}} - {{item.al.name}}
            </div>
            <span class="mv"></span>
            <div class="more" @click.stop="showPopup">
              <span class="iconfont">&#xe6b2;</span>
            </div>
          </div>
        </div>
      </div>
    </Scroll>
    <van-popup v-model="show" round position="bottom" :style="{ height: '40%' }">内容></van-popup>

  </div>
</template>

<script>
  import DetailNavBar from "./DetailNavBar";
  import Authors from "./Authors";
  import Scroll from "components/common/Scroll";
  import {getSongUrl, getSongDetail, getListDetail} from "network/api";
  import {Popup} from 'vant'

  export default {
    name: "PlayList",
    data() {
      return {
        //歌单列表
        playlist: {},
        //trackidid
        trackid: [],
        //歌曲id
        songid: [],
        //歌曲url
        songUrl: [],
        //歌曲信息
        songs: [],
        currentIndex: null,
        show: false,
        listOffsetTop: 0,
        changeContext: false,
      }
    },
    components: {
      DetailNavBar,
      Authors,
      Scroll,
      [Popup.name]: Popup
    },
    created() {
      this.getSongData()
    },
    methods: {
      async getSongData() {
        this.id = this.$route.params.id
        //根据歌曲id找到对应歌曲列表
        const {data: res} = await getListDetail({id: this.id})
        this.playlist = res.playlist
        this.songid = res.playlist.trackIds

        this.trackid = this.playlist.trackIds.map(({id}) => id)
        //获取歌曲详情信息
        const songDetails = await getSongDetail(this.trackid)
        //将歌曲的详细信息保存到songs
        this.songs = songDetails.data.songs
      },
      async playAudio(song, index) {
        const songurl = await getSongUrl(song.id)
        const currentPlay = {
          url: songurl.data.data[0].url,
          id: song.id,
          singer: song.ar[0].name,
          albumPic: song.al.picUrl,
          name: song.name
        }

        this.$store.commit("addToCurrentPlay", currentPlay);
        this.$store.dispatch("AddToPlayList", currentPlay);
        this.currentIndex = index;
      },
      showPopup() {
        this.show = true
      }
    }
  }
</script>

<style scoped>
  .content {
    height: calc(100vh - 50px);
    overflow: hidden;
    position: absolute;
    top: 50px;
    bottom: 45px;
    left: 0;
    right: 0;
  }

  #playlist {
    position: relative;
    z-index: -1;
  }

  /* 播放全部 */
  .playall {
    width: 100%;
    height: 9.722vw;
    line-height: 35px;
    display: flex;
    justify-content: space-between;
  }

  .collect {
    background-color: #ee4d41;
    background-image: linear-gradient(
        to right,
        rgba(226, 125, 125, 0),
        rgb(226, 77, 77)
    );
    color: rgb(240, 239, 239);
    font-size: 3.889vw;
    padding: 0 2.778vw;
  }

  /* 歌曲列表  ↓*/
  .songswrapper {
    width: 100%;
    display: flex;
    height: 45px;
    line-height: 45px;
    padding: 3px 0;
    border-top: 1px solid rgb(247, 245, 245);
  }

  .songsinfo {
    flex: 4;
    margin-left: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
    position: relative;
  }

  .songtitle {
    font-size: 15px;
    margin-bottom: 4px;
  }

  .singer {
    font-size: 12px;
    opacity: 0.7;
    color: #707070;
  }

  .mv {
    flex: 1;
    opacity: 0.9;
    text-align: right;
  }

  .more {
    width: 16px;
    position: absolute;
    right: 5px;
  }

  .active {
    color: rgb(209, 5, 49);
  }
</style>
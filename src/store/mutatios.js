export default {
  //添加歌曲
  addToCurrentPlay(state, currentPlay) {
    state.currentPlay = currentPlay;
  },
  // //添加到播放列表
  addToPlayList(state, currentPlay) {
    state.songList.unshift(currentPlay)
  },
  //切换音乐
  togglePlay(state, index) {
    state.currentPlay = state.songList[index]
    state.currentIndex = index
  },
  //清除播放列表项
  closeSongList(state, index) {
    state.songList.splice(index, 1)
    state.currentPlay = state.songList[index]?state.songList[index]:state.songList[index-1]
    state.currentIndex = state.songList[index]?index:index-1
  },
  //切换上一首
  lastSong(state) {
    state.currentIndex--
    if (state.currentIndex < 0) {
      state.currentIndex = state.songList.length-1
    }
    state.currentPlay = state.songList[state.currentIndex]
  },
  //切换下一首
  nextSong(state) {
    state.currentIndex++
    if (state.currentIndex > state.songList.length-1) {
      state.currentIndex = 0
    }
    state.currentPlay = state.songList[state.currentIndex]
  },

  // //列表播放
  // listToPlay(state, index) {
  //     //把对应索引传到播放列表中
  //     state.currentPlay = state.songList[index]
  //     state.currentIndex = index
  // },
  // //移除列表的item
  // removeItemByIndex(state,id){
  //     state.songList.splice(id,1)
  // },
  // //播放上一首
  // playLastSong(state){
  //     state.currentIndex --;
  //     if (state.currentIndex < 1) {
  //         state.currentIndex = state.songList.length
  //     }
  //     state.currentPlay = state.songList[state.currentIndex - 1]
  //     state.playing = true
  // },
  // //播放下一首
  // playNextSong(state){
  //     state.currentIndex ++;
  //     if (state.currentIndex > state.songList.length) {
  //         state.currentIndex = 1
  //     }
  //     state.currentPlay = state.songList[state.currentIndex - 1]
  //     state.playing = true
  // },
  //
  // play(state) {
  //     if(state.songList.length > 0){
  //         state.playing = true;
  //         console.log('play');
  //     }
  //     else return
  // },
  // pause(state) {
  //     if(state.songList.length > 0){
  //         state.playing = false;
  //         console.log('pause');
  //     }
  // },
  // setCurrentTime(state, data) { //设置播放进度
  //     state.currentTime = data;
  //     // console.log(state.currentTime);
  // },
  //
  //
  // setLoad(state, show) { //设置loading组件是否显示
  //     state.isLoad = show;
  // },
  //
  // // navbarindex
  // changeNavIndex(state,index){
  //     state.navCurrentIndex = index;
  // }
}
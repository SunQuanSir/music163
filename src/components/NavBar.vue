<template>
  <div id="nav">
    <div class="nav-left" @click="navClick(3)">
      <img src="~assets/img/navbar/menus.png" alt="">
    </div>

    <van-popup v-model="show" position="left" class="menusPopup">
      <div class="avatar"></div>
      <div class="mygit" @click="gitClick">
        <img src="~assets/img/github.png" alt="">
        <span>github</span>
      </div>
    </van-popup>

    <div class="nav-center">
      <div @click="navClick(0)" :class="currentIndex==0?'':'active'">
        <img src="~assets/img/navbar/navmusicAct.svg" alt="">
      </div>
      <div @click="navClick(1)" :class="currentIndex==1?'':'active'">
        <img src="~assets/img/navbar/3.svg" alt="">
      </div>
      <div @click="navClick(2)" :class="currentIndex==2?'':'active'">
        <img src="~assets/img/navbar/navplay.svg" alt="">
      </div>
    </div>

    <div class="nav-right" @click="navClick(4)">
      <img src="~assets/img/navbar/search.png" alt="">
    </div>



  </div>
</template>

<script>
  import {Popup} from 'vant'
  export default {
    name: "NavBar",
    data() {
      return {
        currentIndex: 1,
        show:false
      }
    },
    components:{
      [Popup.name]:Popup
    },
    methods: {
      navClick(index) {
        switch (index) {
          case 0:
            this.$router.push('/mine')
            this.currentIndex = 0
            break
          case 1:
            this.$router.push('/home')
            this.currentIndex = 1
            break
          case 2:
            this.$router.push('/mv')
            this.currentIndex = 2
            break
          case 3:
            this.$router.push('/menu')
            this.show=true
            break
          case 4:
            this.$router.push('/search')
            break
        }
      },
      gitClick(){
        alert('没有哦')
      }
    }
  }
</script>

<style scoped>
  .menusPopup{
    z-index: 1001;
    background-color: white;
  }
  #nav {
    display: flex;
    height: 44px;
    align-items: center;
    background: #e5473b;
    padding: 0 20px;
    z-index: 999;
  }

  .nav-left {
    width: 30%;
  }

  .nav-center {
    flex: 1;
    display: flex;
    justify-content: space-around;
  }

  .nav-right {
    width: 30%;
    text-align: right;
  }

  img {
    width: 32px;
  }

  .active {
    opacity: .4;
  }

  /*弹出层*/
  /* 弹出层 */
  .menusPopup{
    height: 100vh;
    width: 80vw;
  }
  .avatar{
    width: 100%;
    height: 30vh;
    background: url(~assets/img/cat2.jpg)  no-repeat;
    background-size: 100% ;
    background-position: 50%;
  }
  .avatar img{
    height: 100% ;
    width: 100%;
  }
  .mygit{
    width: 100%;
    height: 10vh;
    line-height: 10vh;
    opacity: .8;
    text-align: center;
  }
  .mygit img{
    margin:0 5vw 0 0;
    vertical-align: middle;
  }
</style>
<template>
  <div class="home">
    <div class="index-top"></div>
    <div class="index-category">
      <div class="category" v-for="(list,i) in lists" :key="i">
        <i class="iconfont" :class="list.font" :style="{background:list.color}"></i>
        <label>{{list.title}}</label>
      </div>
      <div class="smallIcon" v-for="(list,i) in smallLists" :key="i">
        <i class="iconfont icon-small" :class="list.font"></i>
        <label>{{list.title}}</label>
      </div>
    </div>
    <div class="banner">
      <img  v-for="(v,i) in imgArr" :key="i" :src="v" alt="轮播图" v-show="n==i">  
      <!-- v为value  i为index -->
      <div class="banner-circle">
        <ul>
          <!-- v-for根据图片的不同来渲染轮播点 -->
          <li :class="n==i?'selected':''" v-for="(v,i) in imgArr" :key="i"></li> 
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      n:0,
      lists: [
        {
          title: "美食",
          font: "icon-meishi",
          color: "rgb(255, 128, 0)"
        },
        {
          title: "酒店住宿",
          font: "icon-zhusuxinxi",
          color: "rgb(160, 85, 50)"
        },
        {
          title: "休闲/玩乐",
          font: "icon-yule",
          color: "rgb(0, 191, 143)"
        },
        {
          title: "电影/演出",
          font: "icon-dianying",
          color: "rgb(255, 80, 23)"
        }
      ],
      smallLists: [
        {
          title: "打车",
          font: "icon-cheliang"
        },
        {
          title: "送药上门",
          font: "icon-yaopin"
        },
        {
          title: "火车票/机票",
          font: "icon-huoche"
        },
        {
          title: "信用卡",
          font: "icon-xinyongqia"  //拼写错误为小失误
        },
        {
          title: "亲子/乐园",
          font: "icon-qinzi"
        }
      ],
      imgArr:[
        //webpack问题，他会直接解析地址，而不是用js来解析，webpack用require解析，所以可以直接加，会把他当作对应的地址来解析 
        require("../assets/img/banner2.jpg"),
        require("../assets/img/banner3.jpg"),
        require("../assets/img/banner4.png")
      ]
    }
  },
  // play函数为定时器
 methods:{ 
    play(){
     this.timer=setInterval(this.autoPlay,2000)
      },
    autoPlay(){
        this.n++;
        if(this.n==this.imgArr.length){
          this.n=0;}
      }
 },
 mounted:function(){   //钩子函数，生命周期函数，挂载完成
   this.play();
 },
 destroyed:function(){
   clearInterval(this.timer);
 }

}
</script>

<style scoped>
.index-top {
  height: 170px;
}

.category {
  padding-top: 10px;
  width: 25%;
  text-align: center;
  float: left;
}
.category .iconfont {
  font-size: 40px;
  padding: 10%;
  display: inline-block;
  border-radius: 20%;
  background-color: rgb(255, 126, 182);
}
.category label {
  padding-top: 5px;
  display: block;
}
.smallIcon {
  padding-top: 18px;
  width: 20%;
  text-align: center;
  float: left;
}
.smallIcon .iconfont{
  font-size: 25px;
  display: inline-block;
}
.smallIcon label {
  padding-top: 7px;
  display: block;
}
.banner{
  position: relative;
}
.banner .banner-circle{
position:absolute;
bottom: 5px;
left: 0;
right: 0;
color: blue;
}
.banner .banner-circle li{
  display: inline-block;
 background: rgba(0,0,0,.3);
  border-radius: 50%;
  padding: 5px;
  margin: 2px;
}
.banner .banner-circle ul{
  text-align: center;
}
.banner .banner-circle .selected{
   background: rgba(0,0,0,.8);
}
.banner img{
  width: 100%;
  height: 150px;
}
</style>

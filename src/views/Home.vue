<template>
  <div class="home">
    <!-- 顶部搜索 -->
    <div class="index-top">
      <div class="select-top">
        <div class="location">{{LocationProvince}}</div>
        <input class="select" type="text" />
      </div>
    </div>
    <!-- 顶部导航 -->
    <div class="index-category">
      <div class="category" v-for="(list,i) in lists" :key="i+10">
        <i class="iconfont" :class="list.font" :style="{background:list.color}"></i>
        <label>{{list.title}}</label>
      </div>
      <div class="smallIcon" v-for="(list,i) in smallLists" :key="i">
        <i class="iconfont icon-small" :class="list.font"></i>
        <label>{{list.title}}</label>
      </div>
    </div>
    <!-- 轮播图 -->
    <Banner :imgArr="imgArr" />
    <box-message />
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import BoxMessage from "../components/box-message.vue";

export default {
  name: "Home",
  components: {
    Banner,
    BoxMessage
  },
  data() {
    return {
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
          font: "icon-xinyongqia" //拼写错误为小失误
        },
        {
          title: "亲子/乐园",
          font: "icon-qinzi"
        }
      ],
      imgArr: [
        //webpack问题，他会直接解析地址，而不是用js来解析，webpack用require解析，所以可以直接加，会把他当作对应的地址来解析
        require("../assets/img/banner2.jpg"),
        require("../assets/img/banner3.jpg"),
        require("../assets/img/banner4.png")
      ],
      LocationProvince: "正在定位所在省", //给渲染层定义一个初始值
      LocationCity: "正在定位所在市" //给渲染层定义一个初值
    };
  },
  methods: {
    getList() {
      this.$http.get("/api/shouji/query?appkey=bff35209754d69ae&shouji=13531248925").then(res => {
        //在前面axios名字为http，由于前面已经定义过，这里只需相对地址
       console.log(res)
      });
    }
  },
  mounted: function() {
    this.getList();
  }
};
</script>

<style scoped>
.home {
  background-color: rgb(255, 194, 0);
}
.index-top {
  height: 170px;
}

.select-top {
  float: left;
  height: 50px;
  padding: 10px;
}
.location {
  float: left;
  border: 1px solid black;
  width: 45px;
  height: 30px;
  margin-right: 40px;
}
.select {
  float: left;
  height: 40px;
  width: 200px;
}
.index-category {
  height: 190px;
  width: 350px;
  border-radius: 5% 5% 0 0;
  margin: 0 auto;
  background-color: #fff;
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
.smallIcon .iconfont {
  font-size: 25px;
  display: inline-block;
}
.smallIcon label {
  padding-top: 7px;
  display: block;
}
</style>



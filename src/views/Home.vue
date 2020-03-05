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
    <banner></banner>
    <box-message/>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import BoxMessage from "../components/box-message.vue";
export default {
  name: "Home",
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
      ]
    };
  },
  components: {
    Banner,
    BoxMessage
  }
};
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
.smallIcon .iconfont {
  font-size: 25px;
  display: inline-block;
}
.smallIcon label {
  padding-top: 7px;
  display: block;
}
</style>

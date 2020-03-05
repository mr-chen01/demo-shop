<template>
  <div class="box-message">
    <div class="message" v-for="(v,i) in messageArr" :key="i">
        <img :src="v.img" alt="错误">
        <div class="des">{{v.des}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      messageArr: [
        { img: require("../assets/img/message/mes1.png"), des: "这是一家很好吃的东西" },
        { img: require("../assets/img/message/mes1.png"), des: "这是一家很好吃的东西" },
        { img: require("../assets/img/message/mes1.png"), des: "这是一家很好吃的东西" },
        { img: require("../assets/img/message/mes1.png"), des: "这是一家很好吃的东西" }
      ]
    };
  }
};
</script>
<style scoped>
.box-message {
  float: left;
  width: 100%;
}
.message {
  width: 50%;
  box-sizing: border-box;
  height: 250px;
  padding: 5px;
  display: inline-block;
}
.message img{
    width: 100%;
}
.message .des{

}
</style>
<template>
  <div class="banner">
    <img v-for="(v,i) in imgArr" :key="i" :src="v" alt="轮播图" v-show="n==i" />
    <!-- v为value  i为index -->
    <div class="banner-circle">
      <ul>
        <!-- v-for根据图片的不同来渲染轮播点 -->
        <li :class="n==i?'selected':''" v-for="(v,i) in imgArr" :key="i"></li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  name: "banner",
  data() {
    return {
      n: 0,
      imgArr: [
        //webpack问题，他会直接解析地址，而不是用js来解析，webpack用require解析，所以可以直接加，会把他当作对应的地址来解析
        require("../assets/img/banner2.jpg"),
        require("../assets/img/banner3.jpg"),
        require("../assets/img/banner4.png")
      ]
    }
  },
  // play函数为定时器
  methods: {
    play() {
      this.timer = setInterval(this.autoPlay, 2000);
    },
    autoPlay() {
      this.n++;
      if (this.n == this.imgArr.length) {
        this.n = 0;
      }
    }
  },
  mounted: function() {
    //钩子函数，生命周期函数，挂载完成
    this.play();
  },
  destroyed: function() {
    clearInterval(this.timer);
  }
};
</script>



<style scoped>
.banner {
  position: relative;
}
.banner .banner-circle {
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  color: blue;
}
.banner .banner-circle li {
  display: inline-block;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  padding: 5px;
  margin: 2px;
}
.banner .banner-circle ul {
  text-align: center;
}
.banner .banner-circle .selected {
  background: rgba(0, 0, 0, 0.8);
}
.banner img {
  width: 100%;
  height: 150px;
}
</style>
<template>
  <div id="app">
      <router-view />
      <!-- 路由展示 -->
      <nav-bottom/>
       <!--底部导航 -->
  </div>
</template>

<script>
import NavBottom from './components/NavBottom.vue'
export default {
  components:{
    NavBottom
  }
}

</script>
<style>
@import "./assets/css/index.css";
</style>

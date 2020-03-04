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
    name:'banner'
}
</script>


<style scoped>

</style>
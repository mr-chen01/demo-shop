<template>
    <nav-top :nameArr="nameArr" :style="{fontSize:16+`px`}"/>
</template>
<script>
import navTop from "./Navtop";
export default {
  components: {
    navTop
  },
  data() {
    return {
      nameArr: ["全部", "待付款", "待使用", '待评价',"退款/售后"]
    };
  },
  components: {
    navTop
  }
};
</script>
<style scoped>
</style>


<template>
  <div id="app">
    <open  v-on:change="change" v-show="chOpen"/>
    <div v-on:change="change" v-show="!chOpen"> 
      <router-view />
      <!-- 路由展示 -->
      <nav-bottom  />
       <!--底部导航 -->
       </div>
     
  </div>
</template>

<script>
import NavBottom from './components/NavBottom.vue'
import Open from './views/Open'
export default {
  components:{
    NavBottom,
    Open
  },
  data(){
    return{
      chOpen:true
    }
  },
  methods:{
    change(val){
     this.chOpen=!val;
    }
  }
}

</script>
<style>
@import "./assets/css/index.css";
</style>

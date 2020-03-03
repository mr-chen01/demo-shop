<template>
  <div class="home">
    <div class="index-top"></div>
    <div class="index-category">
      <div class="category" v-for="(list,i) in lists" :key="i">
        <i class="iconfont" :class="list.font" :style="{background:list.color}"></i>
        <label>{{list.title}}</label>
      </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return{
    lists:[
      {
        title:'美食',
        font:'icon-meishi',
        color:'rgb(255, 128, 0)'
      },
      {
        title:'酒店住宿',
         font:'icon-zhusuxinxi',
         color:'rgb(160, 85, 50)'
      },
      {
        title:'休闲/玩乐',
         font:'icon-yule',
         color:'rgb(0, 191, 143)'
      },
      {
        title:'电影/演出',
         font:'icon-dianying',
         color:'rgb(255, 80, 23)'
      }
    ]
    }
  },
  components: {}
};
</script>

<style scoped>
.index-top{
  height: 170px;
}

.category {
  padding-top: 10px;
  width: 25%;
  text-align: center;
  float: left;
}
.category .iconfont{
font-size:40px; 
padding: 10%;
display: inline-block;
border-radius:20%; 
background-color: rgb(255, 126, 182);
}
.category label{
  padding-top:5px; 
  display: block;
}
</style>

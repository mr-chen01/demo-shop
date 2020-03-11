<template>
<div class="find">
    <nav-top :nameArr="nameArr"/>
    <!--顶部导航-->
<!-- <router-view/>> -->
</div>
</template>
<script>
import navTop from './Navtop'
export default {
    data(){
        return{
            nameArr:[
                "推荐",'丽人','旅行','电影','结婚','购物'
                ]
        }
    },
    components:{
     navTop
    }
}
</script>
<style scoped>
.find{
    height: 100px;
}
</style>    
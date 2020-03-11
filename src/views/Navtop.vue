<template>
    <div class="nav-top">
        <div class="nameArr" v-for='(v,i) in nameArr' :key="i">
            {{nameArr[i]}}
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
        
        }
    },
    props:["nameArr"]
}
</script>

<style>
.nav-top{
    
   display:flex;
   text-align: center;
   padding: 5px;
   font-size: 18px;
}
.nameArr{
    flex:1;
}
</style>
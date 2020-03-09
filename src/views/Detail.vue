<template>
    <div class="detail">
    <a @click="goBack()">
        返回
    </a>
    </div>
</template>

<script>
export default {
    name:'Detail',
    data(){
        return{
            id:0
        }
    },
    mounted:function(){
     this.id=this.$route.params.id;
    },
    methods:{
        goBack(){
            this.$router.push('/home');
        }
    }
}
</script>

<style scoped>
 a{
     line-height:50px;
     opacity:0.4;
     text-align: center;
     width: 50px;
     height: 50px;
    position:absolute;
    top: 10px;
    left: 10px;
    border-radius:50% ;
    background-color:rgb(125, 128, 127);
    color: white;
}
</style>
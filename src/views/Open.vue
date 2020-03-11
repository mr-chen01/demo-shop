<template>
  <div class="page-container" id="my">
    <!-- 开屏广告 -->
    <div class="conut-down" v-show="adBack">
      <span v-on:click="jump()">
        点击跳转
        <b>{{n}}</b>
      </span>
    </div>
    <!-- 主体 -->
    <div class="login-content" v-show="!adBack">
      <h1 class="login-title">欢迎登陆</h1>
      <div class="panel">
        <input type="text" class="mobile btn" placeholder="手机号码" />
        <p class="error-tip">手机号不能为空</p>
      </div>
      <div class="panel">
        <input type="password" class="password btn" placeholder="密码" />
        <p class="error-tip">密码不能为空</p>
      </div>
      <div class="panel">
        <button class="btn-login btn login" v-on:click="change()">登陆</button>
      </div>
      <div class="panel">
        <a href="#">我要登陆</a>|
        <a href="#">我要注册</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      n:5,
      adBack:true,
      chOpen:true,
      timer:null //定时器
    }
  },
  methods:{
    play(){
      this.timer=setInterval(this.autoPlay,1000);  //定时器，每隔一秒触发autoplay
    },
    autoPlay(){
      this.n--;
      if(this.n==0){
        this.adBack=false;
        clearInterval(this.timer);  //清除定时器
      }
    },
    change(){
        this.$emit("change", this.chOpen);
    },
    jump(){
      this.adBack=false;
        clearInterval(this.timer);  //清除定时器
    }
  },
  mounted:function(){
      this.play();
    }
    // destroyed:function(){
    //   clearInterval(this.timer);  //清除定时器
    // }
}
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
}
.page-container{
  height: 100%;
}
.btn{
  margin-top:5px ;
  width: 100%;
  height: 45px;
  border: 2px solid blue;
  border-radius:5% ;
}
.conut-down{
  display: block;
  height: 667px;
  background-image:url('../assets/img/open2.png');
}
.conut-down span{
  position: absolute;
  right: 5px;
  top: 5px;
}
.login-content{
  background-image:url('../assets/img/open.jpg');
  padding-top: 100px;
  padding-left: 75px;
  padding-right: 75px;
  height: 100%;

}
.login-title{
  text-align: center;
  font-size: 40px;
  margin-bottom: 15px;
}
.error-tip{
  margin-top: 5px;
  margin-bottom: 5px;
  font-size:15px ;
}
.btn-login{
  background-color: rgb(132, 104, 255);
  color: white;
  font-size: 20px;
}
.panel{
  padding-top: 10px;
}
.panel a{
  margin-right: 3px;
}
</style>
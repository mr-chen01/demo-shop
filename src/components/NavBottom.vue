<template>
  <div class="nav-bottom">
      <!-- 底部导航 -->
      <router-link to="/home">
        <label>
          <i class="iconfont icon-shouye"></i>
          首页
        </label>
      </router-link>
      <router-link to="/find">
        <label>
          <i class="iconfont icon-dingdan"></i>
          发现
        </label>
      </router-link>
      <router-link to="/order">
        <label>
          <i class="iconfont icon-faxian"></i>
          订单
        </label>
      </router-link>
      <router-link to="/my">
        <label>
          <i class="iconfont icon-wode"></i>
          我的
        </label>
      </router-link>
    </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active{
  color: red;
}
</style>

<template>
  <div class="container">
    <el-container class="home-container">
      <!-- 头部导航 -->
      <el-header>
        <div class="header">
        </div>
        <el-button
          type="background-color:#fff;
          text-color:#2F3B3B;
          border:3px solid #07ABA0"
          icon="el-icon-switch-button"
          @click="LoginOut"
        >
          退出登录
        </el-button>
      </el-header>
      <!-- 主体区域 -->
        <el-main>
          <router-view></router-view>
        </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    LoginOut () {
      this.$router.push('/logIn')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  height: 100%;
}
.home-container {
  height: 100%;
}
.el-header {
  background-color: #2A468E;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header {
  display: flex;
  align-items: center;
}
</style>

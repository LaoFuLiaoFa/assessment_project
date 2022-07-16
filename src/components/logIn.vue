<template>
  <div>
    <el-button type="primary" plain round @click="In">登录</el-button>
    <el-button type="primary" plain @click="Register">注册</el-button>
    <el-button type="primary" plain @click="Forget">忘记密码</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  created () {},
  methods: {
    In () {
      this.$router.push('/schoolProfile')
    },
    Register () {
      this.$router.push('/registerIn')
    },
    Forget () {
      this.$router.push('/ForgotPassword')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

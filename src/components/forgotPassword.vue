<template>
  <div>
    <div>
        忘记密码
    </div>
    <div>
        <el-button type="success" plain @click="forgetBack">返回</el-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    forgetBack () {
      this.$router.push('/logIn')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

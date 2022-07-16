<template>
  <div>
    <div>
        PDPTest
    </div>
    <div>
        <el-button type="success" round>检测是否完成题目</el-button>
        <el-button type="success" plain @click="CheckResult">提交</el-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    CheckResult () {
      this.$router.push('/pDPTestCheck')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

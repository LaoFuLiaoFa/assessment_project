<template>
  <div>
    <div>
      气质（风格）测评
    </div>
    <div>
      <el-button type="success" round>
        检测是否完成题目
      </el-button>
      <el-button type="success" plain @click="CheckResult">
        查看测试结果
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    CheckResult () {
      this.$router.push('/styleTestCheck')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

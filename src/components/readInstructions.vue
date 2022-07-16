<template>
  <div>
    <div>
      阅读测评须知
    </div>
    <div>
      <el-button type="success" plain @click="StartAssessment">
        开始测评
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    StartAssessment () {
      this.$router.push('/navMenuHome')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

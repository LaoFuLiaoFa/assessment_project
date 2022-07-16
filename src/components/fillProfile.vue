<template>
  <div>
    <div>
      填写个人资料
    </div>
    <div>
      <el-button type="success" plain @click="OverOut">
        确定
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    OverOut () {
      this.$router.push('/readInstructions')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

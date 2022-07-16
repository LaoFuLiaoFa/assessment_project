<template>
  <div>
    <div>
        学校简介
    </div>
    <div>
        <el-button type="success" plain @click="FillProfile">填写个人资料</el-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    FillProfile () {
      this.$router.push('/fillProfile')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

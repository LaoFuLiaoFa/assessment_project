<template>
  <div>
    <div>
        注册
    </div>
    <div>
        <el-button type="success" plain @click="registerIn">返回</el-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    registerIn () {
      this.$router.push('/logIn')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

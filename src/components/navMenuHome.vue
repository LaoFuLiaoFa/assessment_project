<template>
  <div>
    <el-button type="primary" plain round @click="StyleTest">气质（风格）测评</el-button>
    <el-button type="primary" plain round @click="HollandTest">霍兰德职业兴趣测评</el-button>
    <el-button type="primary" plain round @click="PDPTest">PDP性格测评</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    StyleTest () {
      this.$router.push('/styleTest')
    },
    HollandTest () {
      this.$router.push('/HollandTest')
    },
    PDPTest () {
      this.$router.push('/PDPTest')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

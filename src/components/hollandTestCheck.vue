<template>
  <div>
    <div>
      霍兰德职业兴趣测评结果
    </div>
    <div>
      <el-button type="success" plain @click="OverOut">
        完成测评
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    OverOut () {
      this.$router.push('/endPage')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

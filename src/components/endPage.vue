<template>
  <div class="endBackground">
    <div>
        <el-button
            class="buttonBack"
            type="primary"
            round
            @click="buttonBack"
        >
            返回测评界面
        </el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    buttonBack () {
      this.$router.push('/navMenuHome')
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.endBackground {
    background-image: url(../assets/images/endBackground.png);
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size:100% 100%;
}
.buttonBack {
    position:absolute;
    right:20px;
    bottom:20px;
}
</style>

<template>
  <div class="banner">
    <img class="banner-img" src="@/assets/picture/banner.jpg" alt="Banner">
    <div class="banner-content">
      <h1>预约咨询 开启省心服务</h1>
      <el-button type="primary" @click="$emit('openDialog')" class="button">预约咨询</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerSection',
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style scoped>

/* Banner 横幅 */
.banner {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  background: #222;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-img{
  width: 100%;
  height: 400px;
  display: block;
  filter: brightness(0.7);
  background-image: url('../assets/picture/banner.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}

.banner-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.banner-content {
  position: absolute;
  top: 0;
  left: 0; 
  right: 0; 
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  z-index: 10;
}

.button{
  width: 200px;
  margin-top: 30px;
}
</style>

<template>
  <div class="carousel">
    <el-carousel type="card" height="400px" :autoplay="true" :interval="5000">
      <el-carousel-item v-for="item in caseList" :key="item">
        <el-image :src="item" fit="contain"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'CaseCarousel',
  data() {
    return {
      caseList: [
        require('@/assets/picture/case/01.jpg'),
        require('@/assets/picture/case/02.png'),
        require('@/assets/picture/case/03.jpg'),
        require('@/assets/picture/case/04.jpg'),
        require('@/assets/picture/case/05.jpg'),
        require('@/assets/picture/case/06.jpg'),
        require('@/assets/picture/case/07.jpg'),
        require('@/assets/picture/case/08.jpg'),
        require('@/assets/picture/case/09.jpg'),
        require('@/assets/picture/case/10.jpg'),
        require('@/assets/picture/case/11.jpg'),
        require('@/assets/picture/case/12.jpg'),
        require('@/assets/picture/case/13.jpg'),
        require('@/assets/picture/case/14.jpg'),
        require('@/assets/picture/case/15.jpg')
      ]
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>


<style scoped>
.carousel  {
  margin-top: 100px;
}
</style>

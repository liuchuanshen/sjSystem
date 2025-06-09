<template>
  <div class="carousel">
    <template v-if="filteredImages.length > 0">
      <el-carousel height="400px" :autoplay="true" :interval="3000">
        <el-carousel-item v-for="(item, index) in filteredImages" :key="index">
          <el-image :src="item" fit="scale-down" style="width: 100%; height: 100%" />
        </el-carousel-item>
      </el-carousel>
    </template>
    <template v-else>
      <div class="empty-state">
        <el-empty description="暂无案例" />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'CaseCarousel',
  props: {
    categoryIndex: {
      type: Number,
      required: true
    }
  },
   data() {
    return {
      caseList: []
    }
  },
  computed: {
    filteredImages() {
      const allImages = [
        [
          require('@/assets/picture/carouselPic/SNSJ/01.jpg'),
          require('@/assets/picture/carouselPic/SNSJ/02.jpg'),
          require('@/assets/picture/carouselPic/SNSJ/03.png')
        ], // 室内设计
        [
          require('@/assets/picture/carouselPic/JZSJ/01.jpg'),
          require('@/assets/picture/carouselPic/JZSJ/02.png'),
          require('@/assets/picture/carouselPic/JZSJ/03.png'),
          require('@/assets/picture/carouselPic/JZSJ/04.jpg')
        ], // 建筑设计
        [
          // require('@/assets/picture/carouselPic/CFSJ/01.jpg'),
          // require('@/assets/picture/carouselPic/CFSJ/02.jpg'),
          // require('@/assets/picture/carouselPic/CFSJ/03.png')
        ], // 厂房新建
        [
          // require('@/assets/picture/carouselPic/GFSJ/01.jpg'),
          // require('@/assets/picture/carouselPic/GFSJ/02.jpg'),
          // require('@/assets/picture/carouselPic/GFSJ/03.png')
        ], // 光伏
        [
          // require('@/assets/picture/carouselPic/JDSJ/01.jpg'),
          // require('@/assets/picture/carouselPic/JDSJ/02.jpg'),
          // require('@/assets/picture/carouselPic/JDSJ/03.png')
        ], // 机电设计
        [
          // require('@/assets/picture/carouselPic/JGJGSJ/01.jpg'),
          // require('@/assets/picture/carouselPic/JGJGSJ/02.jpg'),
          // require('@/assets/picture/carouselPic/JGJGSJ/03.png')
        ],  // 结构加固
      ];
      return allImages[this.categoryIndex] || [];
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
  /* margin-top: 100px; */
  background-color: rgba(0, 0, 0, 1);
}
</style>

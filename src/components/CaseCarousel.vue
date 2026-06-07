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
          require('@/assets/picture/CaseCarouselPic/JZSJ/01.jpg'),
          require('@/assets/picture/CaseCarouselPic/JZSJ/02.jpg'),
          require('@/assets/picture/CaseCarouselPic/JZSJ/03.jpg'),
          require('@/assets/picture/CaseCarouselPic/JZSJ/04.jpg')
        ], // 建筑设计
        [
          require('@/assets/picture/CaseCarouselPic/SNSJ/01.jpg'),
          require('@/assets/picture/CaseCarouselPic/SNSJ/02.jpg'),
          require('@/assets/picture/CaseCarouselPic/SNSJ/03.jpg')


        ], // 室内设计
        [
          require('@/assets/picture/CaseCarouselPic/CFSJ/01.jpg'),
          require('@/assets/picture/CaseCarouselPic/CFSJ/02.jpg'),
          require('@/assets/picture/CaseCarouselPic/CFSJ/03.jpg')
        ], // 厂房新建及改扩建
        [
          require('@/assets/picture/CaseCarouselPic/GFSJ/01.jpg'),
          require('@/assets/picture/CaseCarouselPic/GFSJ/02.jpg'),
          require('@/assets/picture/CaseCarouselPic/GFSJ/03.jpg'),
          require('@/assets/picture/CaseCarouselPic/GFSJ/04.jpg'),
          require('@/assets/picture/CaseCarouselPic/GFSJ/05.jpg')
        ], // 光伏
        [
          // require('@/assets/picture/CaseCarouselPic/JDSJ/01.jpg'),
          // require('@/assets/picture/CaseCarouselPic/JDSJ/02.jpg'),
          // require('@/assets/picture/CaseCarouselPic/JDSJ/03.jpg')
        ], // 机电设计
        [
          require('@/assets/picture/CaseCarouselPic/JGJGSJ/01.jpg'),
          require('@/assets/picture/CaseCarouselPic/JGJGSJ/02.jpg'),
          require('@/assets/picture/CaseCarouselPic/JGJGSJ/03.jpg'),
          require('@/assets/picture/CaseCarouselPic/JGJGSJ/04.jpg'),
          require('@/assets/picture/CaseCarouselPic/JGJGSJ/05.jpg'),
          require('@/assets/picture/CaseCarouselPic/JGJGSJ/06.jpg')
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

<template>
  <div class="main">
    <div>
      <el-tabs v-model="activeTab" type="border-card">
        <el-tab-pane
          v-for="(tab, index) in tabs"
          :label="tab.label"
          :name="index.toString()"
          :key="index"
        >
          <div v-if="allImages[index] && allImages[index].length">
            <div class="image-grid">
              <div v-for="(item, i) in allImages[index]" :key="i" class="image-wrap">
                <el-image
                  :src="item.src"
                  fit="cover"
                  class="image-item"
                  :preview-src-list="[item.src]"
                />
                <div class="image-desc">{{ getFileName(item.name) }}</div>
              </div>
            </div>
          </div>
          <div v-else class="empty-state">暂无案例</div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CaseCards',
  data() {
    return {
      activeTab: '0',
      tabs: [
        { label: '室内设计' },
        { label: '建筑设计' },
        { label: '厂房新建及改扩建' },
        { label: '光伏' },
        { label: '机电设计' },
        { label: '结构加固' }
      ],
      allImages: [
        [
          { src: require('@/assets/picture/CaseCardsPic/SNSJ/01.jpg'), name: '01' },
          { src: require('@/assets/picture/CaseCardsPic/SNSJ/02.jpg'), name: '02' },
          { src: require('@/assets/picture/CaseCardsPic/SNSJ/03.jpg'), name: '03' },
          { src: require('@/assets/picture/CaseCardsPic/SNSJ/04.jpg'), name: '04' },
          { src: require('@/assets/picture/CaseCardsPic/SNSJ/05.jpg'), name: '05' },
          { src: require('@/assets/picture/CaseCardsPic/SNSJ/06.jpg'), name: '06' },
          { src: require('@/assets/picture/CaseCardsPic/SNSJ/07.jpg'), name: '07' },
          { src: require('@/assets/picture/CaseCardsPic/SNSJ/08.jpg'), name: '08' },
          { src: require('@/assets/picture/CaseCardsPic/SNSJ/09.jpg'), name: '09' },
          { src: require('@/assets/picture/CaseCardsPic/SNSJ/10.jpg'), name: '10' },
          { src: require('@/assets/picture/CaseCardsPic/SNSJ/11.jpg'), name: '11' },
          { src: require('@/assets/picture/CaseCardsPic/SNSJ/12.jpg'), name: '12' },
          { src: require('@/assets/picture/CaseCardsPic/SNSJ/13.jpg'), name: '13' },
          { src: require('@/assets/picture/CaseCardsPic/SNSJ/14.jpg'), name: '14' },
          { src: require('@/assets/picture/CaseCardsPic/SNSJ/15.jpg'), name: '15' },
          { src: require('@/assets/picture/CaseCardsPic/SNSJ/16.jpg'), name: '16' },
          { src: require('@/assets/picture/CaseCardsPic/SNSJ/17.jpg'), name: '17' },
          { src: require('@/assets/picture/CaseCardsPic/SNSJ/18.jpg'), name: '18' },
          { src: require('@/assets/picture/CaseCardsPic/SNSJ/19.jpg'), name: '19' },
          { src: require('@/assets/picture/CaseCardsPic/SNSJ/20.jpg'), name: '20' },
          { src: require('@/assets/picture/CaseCardsPic/SNSJ/21.jpg'), name: '21' },
          { src: require('@/assets/picture/CaseCardsPic/SNSJ/22.jpg'), name: '22' },
          { src: require('@/assets/picture/CaseCardsPic/SNSJ/23.jpg'), name: '23' },
          { src: require('@/assets/picture/CaseCardsPic/SNSJ/24.jpg'), name: '24' },
          { src: require('@/assets/picture/CaseCardsPic/SNSJ/25.jpg'), name: '25' },
          { src: require('@/assets/picture/CaseCardsPic/SNSJ/26.jpg'), name: '26' },
          { src: require('@/assets/picture/CaseCardsPic/SNSJ/27.jpg'), name: '27' }

        ], // 室内设计
        [
          { src: require('@/assets/picture/CaseCardsPic/JZSJ/01.jpg'), name: '01' },
          { src: require('@/assets/picture/CaseCardsPic/JZSJ/02.jpg'), name: '02' },
          { src: require('@/assets/picture/CaseCardsPic/JZSJ/03.jpg'), name: '03' },
          { src: require('@/assets/picture/CaseCardsPic/JZSJ/04.jpg'), name: '04' },
          { src: require('@/assets/picture/CaseCardsPic/JZSJ/05.jpg'), name: '05' },
          { src: require('@/assets/picture/CaseCardsPic/JZSJ/06.jpg'), name: '06' },
          { src: require('@/assets/picture/CaseCardsPic/JZSJ/07.jpg'), name: '07' },
          { src: require('@/assets/picture/CaseCardsPic/JZSJ/08.jpg'), name: '08' },
          { src: require('@/assets/picture/CaseCardsPic/JZSJ/09.jpg'), name: '09' },
          { src: require('@/assets/picture/CaseCardsPic/JZSJ/10.jpg'), name: '10' },
          { src: require('@/assets/picture/CaseCardsPic/JZSJ/11.jpg'), name: '11' },
          { src: require('@/assets/picture/CaseCardsPic/JZSJ/12.jpg'), name: '12' },
          { src: require('@/assets/picture/CaseCardsPic/JZSJ/13.jpg'), name: '13' }
        ], // 建筑设计
        [
          { src: require('@/assets/picture/CaseCardsPic/CFSJ/01.jpg'), name: '01' },
          { src: require('@/assets/picture/CaseCardsPic/CFSJ/02.jpg'), name: '02' },
          { src: require('@/assets/picture/CaseCardsPic/CFSJ/03.jpg'), name: '03' },
          { src: require('@/assets/picture/CaseCardsPic/CFSJ/04.jpg'), name: '04' },
          { src: require('@/assets/picture/CaseCardsPic/CFSJ/05.jpg'), name: '05' },
          { src: require('@/assets/picture/CaseCardsPic/CFSJ/06.jpg'), name: '06' },
          { src: require('@/assets/picture/CaseCardsPic/CFSJ/07.jpg'), name: '07' },
          { src: require('@/assets/picture/CaseCardsPic/CFSJ/08.jpg'), name: '08' },


        ], // 厂房新建及改扩建
        [], // 光伏
        [], // 机电设计
        [] // 结构加固

      ]
    }
  },
  methods: {
    getFileName(path) {
      const segments = path.split('/');
      const filename = segments[segments.length - 1];
      return filename.split('.')[0]; // "01.jpg" → "01"
    }
  }
}
</script>

<style scoped>
.main{
  padding: 0 160px;
}

.image-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
}

.image-item {
  width: 200px;
  height: 150px;
  object-fit: cover;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.image-desc {
  margin-top: 8px;
  font-size: 14px;
  color: #555;
  width: 200px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.empty-state {
  padding: 40px;
  text-align: center;
  color: #999;
  background-color: #f5f5f5;
}

/deep/ .el-tabs__nav-wrap{
  background-color: #fff !important;
}

/deep/ .el-tabs__nav-scroll {
  background-color: #fff !important;
}

/deep/ .el-tabs__item.is-active {
  font-weight: normal;
  background-color: #2b2b2b !important;
  color: rgba(214, 181, 127, 1) !important;
}

/deep/ .el-tabs__item:hover {
  color: rgba(214, 181, 127, 1) !important;
}

/* ---------- 响应式适配 ---------- */

/* ≤1200px：适度收缩 main padding */
@media screen and (max-width: 1200px) {
  .main {
    padding: 0 100px;
  }
}

/* ≤1024px：缩小 padding，缩放图片 */
@media screen and (max-width: 1024px) {
  .main {
    padding: 0 60px;
  }
  .image-item,
  .image-desc {
    width: 180px;
    height: 130px;
  }
}

/* ≤768px：更小 padding 和图片宽度 */
@media screen and (max-width: 768px) {
  .main {
    padding: 0 16px;
  }
  .image-grid {
    flex-direction: column;
    gap: 12px;
  }
  .image-item,
  .image-desc {
    width: 100%;
    height: auto;
  }
}

/* ≤600px：一行两张图片 */
@media screen and (max-width: 600px) {
  .main {
    padding: 0 16px;
  }
  .image-grid {
    flex-direction: column;
    gap: 12px;
  }
  .image-item,
  .image-desc {
    width: 100%;
    height: auto;
  }
}

/* ≤480px：单列显示 */
@media screen and (max-width: 480px) {
  .main {
    padding: 0 16px;
  }
  .image-grid {
    flex-direction: column;
    gap: 12px;
  }
  .image-item,
  .image-desc {
    width: 100%;
    height: auto;
  }
}
</style>


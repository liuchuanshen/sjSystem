<template>
  <div>
    <!-- 服务流程卡片区块 -->
    <div class="service">
      <div class="service__list">
        <div class="service__item" v-for="(item, index) in servicesList" :key="index">
          <div class="service__icon"><img :src="item.icon" :alt="item.title" /></div>
          <div class="service__title">{{ item.title }}</div>
          <div class="service__desc">{{ item.desc }}</div>
        </div>
      </div>
    </div>

    <!-- 业务范围区块 -->
    <div class="scope">
      <div class="scope__title">业务范围 <span>只为服务优秀的您</span></div>
      <div class="scope__list" id="scopeList"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      servicesList: [
        {
          icon: require('@/assets/picture/case/01.jpg'),
          title: '提交需求',
          desc: '无论您是自建房、民宿、别墅、度假房或者民宿，我们都能为您提供专业的建房服务。'
        },
        {
          icon: require('@/assets/picture/case/01.jpg'),
          title: '需求沟通',
          desc: '设计顾问与您沟通，了解建房需求，实现您对居住品质的期望，进行量身定制建房方案。'
        },
         {
          icon: require('@/assets/picture/case/01.jpg'),
          title: '现场勘测',
          desc: '设计师到到建房地址，了解宅基地周边情况，根据现场情况实际分析量身定制设计。'
        },
         {
          icon: require('@/assets/picture/case/01.jpg'),
          title: '设计方案',
          desc: '通过宅基地现场情况，以及您的建房需求，设计适合您家的方案，提升生活舒适度。'
        },
         {
          icon: require('@/assets/picture/case/01.jpg'),
          title: '确认方案',
          desc: '设计过程中，1+N设计团队，与您确认方案整体细节，施工全程为您提供建房指导服务。'
        },
      ]
    }
  }
}
</script>

<style scoped>
/* 服务流程卡片样式 */
.service {
  background: #f5f5f5;
  padding: 60px 0 40px;
}

.service__list {
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}

.service__item {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);
  flex: 1 1 0;
  min-width: 200px;
  max-width: 220px;
  padding: 32px 18px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: box-shadow 0.2s, transform 0.2s;
  text-align: left;
}

.service__item:hover {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.13);
  transform: translateY(-6px) scale(1.03);
  cursor: pointer;
}

.service__icon {
  width: 54px;
  height: 54px;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.service__icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.service__title {
  font-size: 1.15rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 12px;
  letter-spacing: 1px;
}

.service__desc {
  font-size: 0.98rem;
  color: #666;
  line-height: 1.7;
}

/* 响应式布局 */
@media (max-width: 1000px) {
  .service__list { gap: 18px; }
  .service__item { max-width: 48%; min-width: 180px; }
}

@media (max-width: 700px) {
  .service__list { flex-direction: column; gap: 16px; }
  .service__item { max-width: 100%; }
}

/* 业务范围样式 */
.scope {
  background: #fff;
  padding: 56px 0 40px;
}

.scope__title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 38px;
  letter-spacing: 2px;
}
</style>


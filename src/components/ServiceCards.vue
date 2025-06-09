<template>
  <div>
    <!-- 服务流程卡片区块 -->
    <div class="service">
      <div class="service__list">
        <div class="service__item" v-for="(item, index) in servicesList" :key="index">
          <div class="service__icon"><img :src="item.icon" :alt="item.title" /></div>
          <div class="service__title">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceCards',
  data() {
    return {
      servicesList: [
        {
          icon: 'https://26680005.s21i.faiusr.com/4/ABUIABAEGAAg7siKmgYo_riptwMwUDhQ.png.webp',
          title: '提交需求',
        },
        {
          icon: 'https://26680005.s21i.faiusr.com/4/ABUIABAEGAAg7siKmgYoxqbIwgYwUDhQ.png.webp',
          title: '需求沟通',
        },
        {
          icon:'https://26680005.s21i.faiusr.com/4/ABUIABAEGAAg7siKmgYo4LWDxQMwUDhQ.png.webp',
          title: '现场勘测',
        },
        {
          icon:'https://26680005.s21i.faiusr.com/4/ABUIABAEGAAg78iKmgYo0OeamwcwUDhQ.png.webp',
          title: '设计方案',
        },
        {
          icon:'https://26680005.s21i.faiusr.com/4/ABUIABAEGAAg78iKmgYohpe3nAMwUDhQ.png.webp',
          title: '确认方案',
        },
      ]
    }
  }
}
</script>

<style scoped>
/* 服务流程卡片样式 */
.service {
  /* background: #f5f5f5; */
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
  padding: 0 20px;
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

/* 响应式布局 */
@media (max-width: 1000px) {
  .service__list { gap: 18px; }
  .service__item { max-width: 48%; min-width: 180px; }
}

@media (max-width: 700px) {
  .service__list { flex-direction: column; gap: 16px; }
  .service__item { max-width: 100%; }
}

/* 移动端适配 */
@media screen and (max-width: 768px) {
  .service {
    padding: 40px 0 20px;
  }

  .service__list {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .service__item {
    max-width: 100%;
    min-width: 100%;
    padding: 20px 15px;
  }

  .service__icon {
    width: 40px;
    height: 40px;
    margin-bottom: 12px;
  }

  .service__title {
    font-size: 1rem;
    margin-bottom: 8px;
  }

  .service__desc {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .scope {
    padding: 30px 0 20px;
  }

  .scope__title {
    font-size: 1.5rem;
    margin-bottom: 25px;
    padding: 0 20px;
  }
}
</style>


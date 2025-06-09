<template>
  <header class="header">
    <div class="logo-group">广花设计</div>
    <div class="header-contact">
     <!--  <img src="../assets/picture/header/phone.svg" alt="电话" class="contact-icon" /> -->
      <i class="el-icon-phone"></i>
      <span class="header-phone">131-3848-4787</span>
      <span>185-8868-6184</span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderBar'
}
</script>

<style scoped>
.header {
  background: #fff;
  border-bottom: 1px solid #e5e5e5;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  height: 84px;
  padding: 0 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}

@font-face {
  font-family: 'PangMenZhengDao';
  src: url('../assets/fonts/PangMenZhengDao-Title.ttf') format('truetype');
  font-display: swap;
}

.logo-group{
  font-family: 'PangMenZhengDao', 'Microsoft YaHei', Arial, sans-serif;
  font-size: 50px;
  font-weight: bold;
  color: rgb(53,53,53);
  height: 100%;
  display: flex;
  align-items: center; /* 垂直居中 */
}

.header-contact {
  font-size: 20px;
  color: rgb(201, 145, 68);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 30%;
  min-width: 500px;
  gap: 20px; /* 设置子元素之间的间距，就是几个电话号码之间的间距 */
  position: relative; /* 确保图标与文本层级正常 */
  padding-left: 60px; /* 增加左侧与phone.svg的边距，默认图标宽度24px + 间距26px */
}

/* 移动端适配 */
@media screen and (max-width: 768px) {
  .header {
    height: 60px;
    padding: 0 20px;
  }

  .logo-group {
    font-size: 30px;
  }

  .header-contact {
    font-size: 16px;
    min-width: 200px;
    padding-left: 40px;
  }

  .header-contact span {
    display: none;
  }

  .header-contact .header-phone {
    display: block;
  }
}

</style>

<template>
  <header class="header">
    <!-- <div class="logo-group">广花设计</div> -->
    <div class="logo-group">广花设计</div>
    <div class="header-contact">
     <!--  <img src="../assets/picture/header/phone.svg" alt="电话" class="contact-icon" /> -->
      <span>13131313131</span>
      <span>18888888888</span>
      <span>18588888888</span>
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

.header-contact::before {
  content: ""; /* 必须填写，否则伪元素不显示 */
  position: absolute;
  left: 0; /* 定位到左侧 */
  top: 50%; /* 垂直居中 */
  transform: translateY(-50%); /* 向上偏移50% */
  width: 30px; /* 图标宽度 */
  height: 30px; /* 图标高度 */
  background: url(../assets/picture/header/phone.svg) no-repeat center/cover; /* 引入图标路径 */
}

.header-contact {
  font-size: 25px;
  color: #222;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  gap: 5px; /* 设置子元素之间的间距，就是几个电话号码之间的间距 */
  position: relative; /* 确保图标与文本层级正常 */
  padding-left: 60px; /* 增加左侧与phone.svg的边距，默认图标宽度24px + 间距26px */
}

/*
.contact-icon {
  width: 30px;
  height: 30px;
  margin-right: 10px;
  vertical-align: middle;
}
*/

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
    width: auto;
    padding-left: 40px;
  }

  .header-contact::before {
    width: 20px;
    height: 20px;
  }

  .header-contact span {
    display: none;
  }

  .header-contact span:first-child {
    display: block;
  }
}

</style>

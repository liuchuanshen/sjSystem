<template>
  <header class="header">
    <!-- <div class="logo-group">广花设计</div> -->
    <div class="logo-group">xxx</div>
    <div class="header-contact">
      <span>xxx</span>
      <span>xxx</span>
      <span>xxx</span>
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
  src: url('../assets/css/fonts/PangMenZhengDao-Title.ttf') format('truetype');
  font-display: swap;
}

.logo-group{
  font-family: 'PangMenZhengDao', 'Microsoft YaHei', Arial, sans-serif;
  font-size: 60px;
  font-weight: bold;
  color: rgb(53,53,53);
  height: 100%;
}

.header-contact {
  font-size: 20px;
  color: #222;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
}

</style>

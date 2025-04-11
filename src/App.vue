<template>
  <el-container style="height: 100vh">
    <!-- 侧边菜单栏 -->
    <el-aside width="200px" style="background-color: #545c64">
      <el-menu
        :default-active="activeMenu"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <el-menu-item index="/home">
          <span>首页</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <!-- 右侧主内容 -->
    <el-container>
      <!-- 面包屑导航 -->
      <!-- <el-header style="background: #f5f5f5; padding: 10px">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item
            v-for="(item, index) in breadcrumbs"
            :key="index"
            :to="item.path"
          >
            {{ item.label }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </el-header> -->

      <!-- 主要内容 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeMenu: this.$route.path, // 默认选中当前路径
    };
  },
  computed: {
    // breadcrumbs() {
    //   return this.$route.matched.map((item) => ({
    //     label: item.meta.title || item.name,
    //     path: item.path,
    //   }));
    // },
  },
  watch: {
    $route(to) {
      this.activeMenu = to.path; // 监听路由变化，更新菜单选中状态
    },
  },
};
</script>

<style>
  *{
    margin: 0px;
    padding: 0px;
  }
  .el-aside {
    width: 200px !important;
  }
  #app {
  }
</style>

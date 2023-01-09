<template>
  <div class="main">
    <div class="filter">
      <el-input
        placeholder="请输入内容"
        v-model="searchText"
      >
      </el-input>
      <el-button type="primary" class="button" @click="search">搜索</el-button>
    </div>
    <div class="table">
      <el-table
        :data="tableData"
        style="width: 100%"
        :default-sort = "{prop: 'date', order: 'descending'}"
      >
        <el-table-column
          prop="date"
          label="日期"
          sortable
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          sortable
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
        >
        </el-table-column>
    </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      searchText:'',
      tableData: []
    }
  },
  created(){
    this.search()
  },
  methods: {
    search(){
      
      this.$axios.get('/api/data').then((res)=>{
        console.log('res',res)
      }).catch(error => {
        console.log('请求失败');
      })

    }
  }
}
</script>

<style scoped>
  @import './style.css';
</style>

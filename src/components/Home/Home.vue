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
          prop="symbol"
          label="市场标识代码"
        >
        </el-table-column>
        <el-table-column
          prop="code"
          label="无市场标识代码"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="名称"
        >
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        background
        layout="total, prev, pager, next"
        :total="1000"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>

import { list } from '@/api/list'

export default {
  name: 'Home',
  data () {
    return {
      currentPage: 1,
      searchText:'',
      tableData: []
    }
  },
  created(){
    list().then((res)=>{
      if(res.code === 200){
        this.tableData = res.data.list
      }
    })
  },
  methods: {
    search(){
      list({'page':this.currentPage}).then((res)=>{
        if(res.code === 200){
          this.tableData = res.data.list
        }
      })
    },
    handleCurrentChange(val) {
      list({'page':val}).then((res)=>{
        if(res.code === 200){
          this.tableData = res.data.list
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  @import './style.css';

  /deep/ .el-pagination{
    text-align: right;
    margin-top: 10px
  }

  /deep/ .el-pagination__total{
    color: #f4f4f5;
  }
</style>

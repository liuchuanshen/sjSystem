<template>
  <div class="main">
    <div class="filter">
      <el-input
        placeholder="请输入股票代码、股票名称"
        v-model="keywords"
        style="width: 300px"
      />
      <el-button type="primary" class="button" @click="search">搜索</el-button>
    </div>

    <div class="table">
      <el-table
        :row-key="row => row.dm"
        :data="currentPageData"
        :default-sort="{ prop: 'date', order: 'descending' }"
        stripe
        max-height="600px"
        v-loading="loading"
      >
        <el-table-column type="index" label="序号" width="200" />
        <el-table-column prop="dm" label="股票代码" />
        <el-table-column prop="mc" label="股票名称" />
        <el-table-column prop="jys" label="交易所">
          <template v-slot="scope">
            {{ scope.row.jys === 'sh' ? '上证' : scope.row.jys === 'sz' ? '深证' : scope.row.jys }}
          </template>
        </el-table-column>
        <el-table-column label="操作" width="120">
          <template v-slot="scope">
            <el-button
              type="text"
              size="small"
              @click="rowClick(scope.row)"
            >
              查看详情
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页组件 -->
      <el-pagination
        background
        style="margin-top: 20px; text-align: right"
        :current-page="currentPage"
        :page-size="pageSize"
        layout="total, prev, pager, next, jumper"
        :total="tableData.length"
        @current-change="handlePageChange"
      />
    </div>

    <StockDialog ref="stockDialog" />
  </div>
</template>


<script>
import { list, detailInfo } from '@/api'
import StockDialog from './components/stockDialog.vue'

export default {
  name: 'Home',
  components: {
    StockDialog
  },
  data () {
    return {
      loading: false,
      originData: [], // 原始去重后的数据
      tableData: [],  // 搜索后的数据（用于分页）
      currentPageData: [], // 当前分页展示数据
      currentPage: 1,
      pageSize: 50,
      keywords: ''
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    loadData () {
      this.loading = true
      list().then((res) => {
        if (res.length > 0) {
          // 去重：dm + mc + jys
          const uniqueMap = new Map()
          const filtered = res.filter(item => {
            const key = `${item.dm}-${item.mc}-${item.jys}`
            if (!uniqueMap.has(key)) {
              uniqueMap.set(key, true)
              return true
            }
            return false
          })

          this.originData = filtered
          this.tableData = filtered
          this.handlePageChange(1) // 初始化第一页数据
        }
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    },

    search () {
      const kw = this.keywords.trim().toLowerCase()
      if (!kw) {
        this.tableData = this.originData
      } else {
        this.tableData = this.originData.filter(item => {
          return (
            item.dm.toLowerCase().includes(kw) ||
            item.mc.toLowerCase().includes(kw)
          )
        })
      }
      this.handlePageChange(1)
    },

    handlePageChange (page) {
      this.currentPage = page
      const start = (page - 1) * this.pageSize
      const end = start + this.pageSize
      this.currentPageData = this.tableData.slice(start, end)
    },

    rowClick (row) {
      this.loading = true
      detailInfo(row.dm).then((res) => {
        this.$refs.stockDialog.title = `${row.mc} 股票详情`
        this.$refs.stockDialog.openDialog(res)
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    }
  }
}
</script>


<style lang="less" scoped>
</style>

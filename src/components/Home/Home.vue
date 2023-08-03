<template>
  <div class="main">
    <div class="filter">
      <el-input
        placeholder="请输入内容"
        v-model="conditions.name"
      >
      </el-input>
      <el-button type="primary" class="button" @click="search()">搜索</el-button>
    </div>
    <div class="table">
      <el-table
        :data="tableData"
        style="width: 100%"
        :default-sort = "{prop: 'date', order: 'descending'}"    
        @row-click="rowClick"
      >
        <el-table-column
          prop="ts_code"
          label="市场标识代码"
        >
        </el-table-column>
        <el-table-column
          prop="symbol"
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
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        background
        layout="total, prev, pager, next"
        :total="this.total"
      >
      </el-pagination>
    </div>
    <el-dialog
      :title="title"
      :visible.sync="centerDialogVisible"
      width="80%"
      center
    >
      <el-descriptions title="股票发行信息">
        <el-descriptions-item label="股票代码" prop="ts_code">{{ts_code}}</el-descriptions-item>
        <el-descriptions-item label="交易所代码">{{this.releaseInfo.exchange}}</el-descriptions-item>
        <el-descriptions-item label="法人代表">{{this.releaseInfo.chairman}}</el-descriptions-item>
        <el-descriptions-item label="总经理">{{this.releaseInfo.manager}}</el-descriptions-item>
        <el-descriptions-item label="董秘">{{this.releaseInfo.secretary}}</el-descriptions-item>
        <el-descriptions-item label="注册资本">{{this.releaseInfo.reg_capital}}</el-descriptions-item>
        <el-descriptions-item label="注册日期">{{this.releaseInfo.setup_date}}</el-descriptions-item>
        <el-descriptions-item label="所在省份">{{this.releaseInfo.province}}</el-descriptions-item>
        <el-descriptions-item label="所在城市">{{this.releaseInfo.city}}</el-descriptions-item>
        <el-descriptions-item label="公司主页">{{this.releaseInfo.website}}</el-descriptions-item>
        <el-descriptions-item label="电子邮件">{{this.releaseInfo.email}}</el-descriptions-item>
        <el-descriptions-item label="员工人数">{{this.releaseInfo.employees}}</el-descriptions-item>
        <el-descriptions-item label="主要业务及产品">{{this.releaseInfo.main_business}}</el-descriptions-item>
        <el-descriptions-item label="经营范围">{{this.releaseInfo.business_scope}}</el-descriptions-item>
      </el-descriptions>
      <div id="chart-container"></div>
      <p v-if="ma50Value && ma200Value" 
        style="
          display: flex;
          justify-content: center;
          font-size: 16px;
          font-weight: 600;
          color: red;
        "
      >
        {{ ma50Value > ma200Value ? '目前处于黄金交叉' : '目前处于死亡交叉' }}
      </p>
      <!-- <el-descriptions title="近三年价位">
        <el-descriptions-item label="2022年最高">{{this.max_2022}}</el-descriptions-item>
        <el-descriptions-item label="2022年最低">{{this.min_2022}}</el-descriptions-item>
        <el-descriptions-item label="2021年最高">{{this.max_2021}}</el-descriptions-item>
        <el-descriptions-item label="2021年最低">{{this.min_2021}}</el-descriptions-item>
        <el-descriptions-item label="2020年最高">{{this.max_2020}}</el-descriptions-item>
        <el-descriptions-item label="2020年最低">{{this.min_2020}}</el-descriptions-item>
      </el-descriptions> -->
    </el-dialog>
  </div>
</template>

<script>

import { list, getStockIssue, getDailyHis, getTencent } from '@/api'
import quertstring from "querystring"

export default {
  name: 'Home',
  data () {
    return {
      title: '',
      centerDialogVisible: false,
      currentPage: 1,
      tableData: [],
      conditions:{
        name:'',
        page: 1,
        size: 10
      },
      total: null,
      releaseInfo:{},
      ts_code:'',
      apiKey: 'O4M8P8D8PWMI3YBB',
      symbol: '',
      ma50Value: null,
      ma200Value: null
      // max_2020: null,
      // min_2020: null,
      // max_2021: null,
      // min_2021: null,
      // max_2022: null,
      // min_2022: null,
    }
  },
  created(){

    document.onkeydown = (e) => {
      let key = window.event.keyCode;
      if (key == 13) {
        this.search();
      }
    }
    
    for (let key in this.conditions) {
      if(this.conditions[key] === ''){
        delete this.conditions[key]
      }
    }

    let params = quertstring.stringify(this.conditions);

    list(params).then((res)=>{
      if(res.code === 200){
        this.tableData = res.data.list
        this.total = res.data.total
      }
    })
  },
  methods: {
    search(){

      for (let key in this.conditions) {
        if(this.conditions[key] === ''){
          delete this.conditions[key]
        }
      }

      let params = quertstring.stringify(this.conditions);

      list(params).then((res)=>{
        if(res.code === 200){
          this.tableData = res.data.list
          this.total = res.data.total
        }
      })
    },
    handleCurrentChange(val) {
      this.expands = []

      for (let key in this.conditions) {
        if(this.conditions[key] === ''){
          delete this.conditions[key]
        }
      }

      this.conditions.page = val

      let params = quertstring.stringify(this.conditions);

      list(params).then((res)=>{
        if(res.code === 200){
          this.tableData = res.data.list
          this.total = res.data.total
        }
      })
    },
    rowClick(row) {
			getStockIssue(row.ts_code).then((res)=>{
        if(res.code === 200){
          this.ts_code = row.symbol
          this.releaseInfo = res.data

          const apiKey = this.apiKey;
          const symbol = row.symbol;

          fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}&outputsize=full`)
            .then(response => response.json())
            .then(data => {
              const dailyData = data['Time Series (Daily)'];

              // 筛选最近的数据，并计算收盘价
              const dates = Object.keys(dailyData).reverse();
              const closingPrices = dates.map(date => parseFloat(dailyData[date]['4. close']));

              // 计算50天移动平均线
              const ma50 = this.calculateMovingAverage(closingPrices, 50);
              // 计算200天移动平均线
              const ma200 = this.calculateMovingAverage(closingPrices, 200);

              // 更新数据
              this.ma50Value = ma50[ma50.length - 1];
              this.ma200Value = ma200[ma200.length - 1];

              // 绘制图表
              const chartContainer = document.getElementById('chart-container');
              const chart = new Highcharts.Chart({
                chart: {
                  renderTo: chartContainer,
                  type: 'line',
                  zoomType: 'x'
                },
                title: {
                  text: `价格与移动平均值`
                },
                subtitle: {
                  text: document.ontouchstart === undefined ?
                  '鼠标拖动可以进行缩放' : '手势操作进行缩放'
                },
                xAxis: {
                  categories: dates
                },
                yAxis: {
                  title: {
                    text: '价格'
                  }
                },
                series: [{
                  name: row.name,
                  data: closingPrices
                }, {
                  name: '50天移动平均线',
                  data: ma50
                }, {
                  name: '200天移动平均线',
                  data: ma200
                }]
              });

              
            })
            .catch(error => {
              console.error('Error fetching data:', error);
            });

          this.centerDialogVisible = true
        }
      })

      // getDailyHis(row.ts_code).then((res)=>{
      //   if(res.code === 200){
      //   }
      // })

      // getTencent(row.symbol).then((res)=>{
        
      // })
    },
    // 计算移动平均线函数
    calculateMovingAverage(prices, period) {
      const movingAverages = [];
      for (let i = period - 1; i < prices.length; i++) {
        const sum = prices.slice(i - period + 1, i + 1).reduce((acc, price) => acc + price, 0);
        const average = sum / period;
        movingAverages.push(Number(average.toFixed(2)));
      }
      return movingAverages;
    }
  }
}
</script>

<style lang="less" scoped>
  @import './style.css';


/deep/ .el-pagination{
  text-align: right !important;
}

/deep/ .el-pagination{
  text-align: right;
  margin-top: 10px
}

/deep/ .el-pagination__total{
  color: #f4f4f5;
}

.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}

/deep/ .el-descriptions{
  padding-left: 60px;
}

/deep/ .el-tooltip{
  overflow: hidden; //超出的文本隐藏
  text-overflow: ellipsis; //溢出用省略号显示
  white-space: nowrap;  // 默认不换行；
  width: 300px;
}

/deep/ .el-table__row{
  cursor: pointer;
}
</style>

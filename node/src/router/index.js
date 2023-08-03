const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware');
const router =  express.Router();
const cors = require('../filter/cors')
const { formatData } = require('../utils')
const http = require('http');
const request = require('request');
const dip = require("dipiper");
const xlsx = require("node-xlsx");
const fs = require("fs");
// const mongo = require('../db/mongo')
const mongod = require('../db/mongod')
const date = require('silly-datetime')
const jsdom = require("jsdom");
const cheerio = require('cheerio');
const axios = require("axios")
const { Wechaty } = require('wechaty')
const fetch = require('node-fetch');

// CORS跨域资源共享
router.use(cors)

// axios.post('http://api.tushare.pro', {
//     "api_name":"stock_basic",
//     "token":"35abe338195c1c207a2c8b8a3ef2771b47e76532b0e494af99d3fcc8",
//     "fields":"ts_code,symbol,name,area,industry,fullname,enname,cnspell,market,exchange,curr_type,list_status,list_date,delist_date,is_hs"
// })
// .then(async (res) => {
//     let arr = []
//     let data = res.data.data.items.map((item)=>{
//         arr.push({
//             ts_code:item[0],
//             symbol:item[1],
//             name:item[2],
//             area:item[3],
//             industry:item[4],
//             fullname:item[5],
//             enname:item[6],
//             cnspell:item[7],
//             market:item[8],
//             exchange:item[9],
//             curr_type:item[10],
//             list_status:item[11],
//             list_date:item[12],
//             delist_date:item[13],
//             is_hs:item[14],
//         })
//     })
//     await mongod.create('totalList', arr )
// })
//  dip.stock.symbols.getStockList().then(async(data) =>{
    //数据存储、处理逻辑，请自行实现
    // res.send(formatData({ 'data': data }))   
//     await mongod.create('totalList', data )
// })


router.get('/list', async(req, res) => {
    let { page, size, name } = req.query
    const pageNum = page - 1
    const sizeNum = size * 1
    const result = await mongod.find('totalList', name, pageNum, sizeNum);

    res.send(formatData({ data: result.total ? result : [] }))
})

// 发行信息
// 获取上市发行信息
// ts_code 股票代码
// exchange 交易所代码 (SSE上交所 SZSE深交所)
// chairman 法人代表
// manager 总经理
// secretary 董秘
// reg_capital 注册资本
// setup_date 注册日期
// province 所在省份
// city 所在城市
// website 公司主页
// email 电子邮件
// employees 员工人数
// main_business 主要业务及产品
// business_scope 经营范围
router.get('/getStockIssue', async(req, res) => {
    let { ts_code } = req.query
    
    axios.post('http://api.tushare.pro', {
        "api_name":"stock_company",
        "token":"35abe338195c1c207a2c8b8a3ef2771b47e76532b0e494af99d3fcc8",
        "params":{
            "ts_code": ts_code
        }
    }).then(async (result) => {
        let data = result.data.data
        let obj = {}
        if(data.items[0]){
            data.items[0].forEach((item,idx)=>{
                obj[data.fields[idx]] = item;
            })
            res.send(formatData({ data: obj }))
        }else{
            res.send(formatData({ data: obj }))
        }
    })
})

//日线历史数据
// ts_code 股票代码
// trade_date 交易日期
// open 开盘价
// high 最高价
// low 最低价
// close 收盘价
// pre_close 昨收价(前复权)
// change 涨跌额
// pct_chg 涨跌幅
// vol 成交量 （手）
// amount 成交额 （千元）
router.get('/getDailyHis', async(req, res) => {
    let { ts_code, date } = req.query

    axios.post('http://api.tushare.pro', {
        "api_name":"daily",
        "token":"35abe338195c1c207a2c8b8a3ef2771b47e76532b0e494af99d3fcc8",
        "params":{
            "ts_code": ts_code,
            "trade_date": date
        }
    }).then(async (result) => {
        let data = result.data.data
        let obj = {}
        if(data.items[0]){
            data.items[0].forEach((item,idx)=>{
                obj[data.fields[idx]] = item;
            })
            res.send(formatData({ data: obj }))
        }else{
            res.send(formatData({ data: obj }))
        }
    })
})

//月线历史数据
// router.get('/getMonthHis', async(req, res) => {
//     let { code } = req.query
//     dip.stock.trading.getMonthHis(code).then((data) => {
//         console.log('data',data[data.length -1 ])
//     });
// })

//腾讯股票数据接口
router.get('/getTencent', async(req, res) => {
    let { code } = req.query
})




module.exports = router;
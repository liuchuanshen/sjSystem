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
const mongo = require('../db/mongo')

// CORS跨域资源共享
router.use(cors)

// dip.stock.symbols.getStockList().then((data) =>{
//     //数据存储、处理逻辑，请自行实现
//     res.send(formatData({ 'data': data }))    
// })

router.get('/list', async(req, res) => {
    let { page = 1, size = 10, sort = 'regtime', total, name } = req.query
    const pageNum = page
    const sizeNum = size * 1
    total = !((total == '0' || total == 'false'))
    const result = await mongo.find('totalList', {}, { name, pageNum, sizeNum, sort })
    // { total: count, list }
    // console.log('list=', list)
    res.send(formatData({ data: result.total ? result : [] }))
})

module.exports = router;
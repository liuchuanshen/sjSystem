const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware');
const router =  express.Router();
const cors = require('../filter/cors')

// CORS跨域资源共享
router.use(cors)

router.use(express.urlencoded({
    extended: false
}), express.json(), express.raw())

router.get('/data',(req,res)=>{
    console.log('req',req)
    console.log('res',res)
})

// jsonp请求: 后端返回全局函数执行的js代码
// router.get('/jsonp',(req,res)=>{
//     let {callback} = req.query;
//     let user = {username:'laoxie',password:123456,gender:'男',role:'admin'}
//     res.send(`${callback}(${JSON.stringify(user)})`);
//     // console.log('callback1=',callback1)
// })

const proxyMiddleware = createProxyMiddleware({
    // 目标服务器
    target: 'https://list.gome.com.cn/cat10000070-00-0-48-1-0-0-0-1-0-0-0-10-0-0-0-0-0.html?&page=2&bws=0&type=json&rank=1', 
    // 修改请求源
    changeOrigin: true,
    // 路径重写
    pathRewrite: {
        '^/api/offer': '/api', // rewrite path
    },
})

// 只有地址匹配/api/offer，才进入这个中间件
router.use('/offer',proxyMiddleware);

module.exports = router;
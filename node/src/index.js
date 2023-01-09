const express = require('express');
const allRouter = require('./router');
const fs = require('fs')
const app = express();

// 静态资源服务器
app.use(express.static('../public',{
    // 索引页
    // index:'views/proxy.html',
    maxAge:1000*60*60*24*2
}))

// 数据接口
app.use('/api',allRouter);

// 上线history路由需要后端支持设置
app.use(function(req,res){
    fs.readFile('../public/index.html',(err,content)=>{
        res.set({
            'Content-Type':'text-html;charset=utf-8'
        });
        res.send(content)
    })
})

const PORT = 2010;
app.listen(PORT,()=>{
    console.log(`server is runing on port ${PORT}`)
})
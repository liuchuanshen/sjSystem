const express = require('express');
const PORT = 2009;

const app = express();

app.use(express.static('../public'));

app.use(express.urlencoded({extended:false}),express.json(),express.raw())

// 监听端口
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}` )
})
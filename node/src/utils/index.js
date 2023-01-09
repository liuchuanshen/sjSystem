const crypto = require('crypto');
const { copyFileSync } = require('fs');

function formatData({code=200,data=[],msg='success'}={}){
    if(code === 400){
        msg = 'fail'
    }
    if(code === 401){
        msg = 'No Access'
    }
    return {
        code,
        data,
        msg
    }
}

/**
 * 数据加密
 * @param {String} data 待加密数据
 * @return {String}     返回加密后的数据
 */

 function encrypto(password){
    //加密密码
    const md5 = crypto.createHash('md5');
    md5.update(password);
    password = md5.digest('hex');

    //二次加密 
    const hash = crypto.createHash('sha256');
    hash.update(password);
    password = hash.digest('hex')
    
    return password
 }


module.exports = {
    formatData,
    encrypto
}
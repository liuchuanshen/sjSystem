const exec = require('child_process').exec;
check();

function check(){
  let last = exec('lsof -i:2010');
  
  last.on('exit', function(code){
    if(code != '0'){
      console.log('主服务器崩溃,正在进行重启');
      run()
    } else {
      console.log('主服务器正常运行');
    }
  });
  setTimeout(check,2000);
}

function run (){
  let last = exec ('node index.js');
  last.on('exit',function (code){
     if(code == '0') {
      console.log('主服务器已经重启成功');
    } else {
      console.log('主服务器重启失败');
    }
  })
} 
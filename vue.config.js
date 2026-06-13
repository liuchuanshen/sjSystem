module.exports = {
    publicPath: '/sjSystem/',
    devServer: {
      host: 'localhost', // 本地地址
      port: 8080, // 端口号
      open: true, // 配置项目在启动时自动在浏览器打开
      proxy: {
        '/api': {
          target: 'http://localhost:8080', // 请求地址，一般是服务器地址
          changeOrigin: true, // 是否进行跨域
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  };
  
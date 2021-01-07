module.exports = {
  // devServer 选项单独配置
  devServer: {
    https: false,
    proxy: {
      '/api': {
        target: process.env.VUE_APP_API_URL,
        changeOrigin: true,
        onProxyReq: function (proxyReq) {
          proxyReq.removeHeader('origin')
        }
      }
    }
  }
}

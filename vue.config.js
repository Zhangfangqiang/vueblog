module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://bsf.zfajax.com/',
        ws: true          , //代理websockets
        changeOrigin: true, // 是否跨域，虚拟的站点需要更管origin
      },
      '.(.mp4|.png|.txt|.jpg)': {
        target: 'http://bsf.zfajax.com/upload',
        ws: true          , //代理websockets
        changeOrigin: true, // 是否跨域，虚拟的站点需要更管origin
      },
    }



  }
}

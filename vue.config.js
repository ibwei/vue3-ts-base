const IS_DEV = process.env.NODE_ENV !== 'production'
module.exports = {
  css: {
    loaderOptions: {
      less: {
        globalVars: {},
        srouceMap: IS_DEV,
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  },
  pluginOptions: {
    /** 全局加载less 的 webpack 插件  */
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: ['./src/styles/_variables.less']
    }
  },
  configureWebpack: {},
  chainWebpack: (config) => {
    // 注入全局样式
  }
}

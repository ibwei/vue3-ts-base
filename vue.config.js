const IS_DEV = process.env.NODE_ENV !== 'production'
/**
 * @todo 开发环境配置
 * 某些实用工具， plugins 和 loaders 都只能在构建生产环境时才有用
 * 在开发时使用 UglifyJsPlugin 来压缩和修改代码是没有意义的,不压缩
 */

const DEVELOPMENT = webpackConfig => {
  /**
   * @todo 启用 eval-source-map 更好的测试
   * 每个模块使用 eval() 执行，并且 source map 转换为 DataUrl 后添加到 eval() 中。
   * 初始化 source map 时比较慢，但是会在重新构建时提供比较快的速度，并且生成实际的文件。
   * 行数能够正确映射，因为会映射到原始代码中。它会生成用于开发环境的最佳品质的 source map。
   */

  webpackConfig.store.set('devtool', 'eval-source-map')
  webpackConfig.plugin('html').tap(([options]) => [
    Object.assign(options, {
      minify: false,
      chunksSortMode: 'none'
    })
  ])
  return webpackConfig
}

/**
 * @todo 生产环境配置
 * 每个额外的 loader/plugin 都有启动时间。尽量少使用不同的工具
 */

const PRODUCTION = webpackConfig => {
  /**
   * @todo 不需要启用 source-map，去除 console 的情况下 source-map 根本没用，还浪费大量时间和空间
   * 详情见：https://webpack.js.org/configuration/devtool/#devtool
   */
  webpackConfig.store.set('devtool', '')
  webpackConfig.plugin('html').tap(([options]) => [
    Object.assign(options, {
      minify: {
        removeComments: true,
        removeCommentsFromCDATA: true,
        collapseWhitespace: true,
        conservativeCollapse: false,
        collapseInlineTagWhitespace: true,
        collapseBooleanAttributes: true,
        removeRedundantAttributes: true,
        removeAttributeQuotes: false,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        minifyJS: true,
        minifyCSS: true
      },
      cache: true, // 仅在文件被更改时发出文件
      hash: true, // true则将唯一的webpack编译哈希值附加到所有包含的脚本和CSS文件中,这对于清除缓存很有用
      scriptLoading: 'defer', // 现代浏览器支持非阻塞javascript加载（'defer'）,以提高页面启动性能。
      inject: true, // true所有javascript资源都将放置在body元素的底部
      chunksSortMode: 'none'
    })
  ])

  return webpackConfig
}

module.exports = {
  publicPath: IS_DEV ? '/' : '/vue3-ts-base',
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
  devServer: {
    proxy: 'http://10.10.10.115:8002'
  },
  pluginOptions: {
    /** 全局加载less 的 webpack 插件  */
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: ['./src/styles/index.less']
    }
  },
  /**
   * @description 去掉 console信息
   *  config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
   *  html-webpack-plugin插件配置详情见 https://github.com/jantimon/html-webpack-plugin#options
   */
  configureWebpack: config => {
    if (!IS_DEV) {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
      config.optimization.minimizer[0].options.terserOptions.sourceMap = false
    }
  },
  chainWebpack: config => {
    IS_DEV ? DEVELOPMENT(config) : PRODUCTION(config)
  },
  productionSourceMap: false,
  lintOnSave: true
}

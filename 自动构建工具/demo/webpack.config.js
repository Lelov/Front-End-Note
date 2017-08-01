// 引入path模块
const path = require('path')
// 引入webpack
const webpack = require('webpack')

module.exports = {
  // 配置默认处理的目录
  context: path.resolve(__dirname,'./src'),
  // 入口文件
  entry: './app.js',
  // 输出配置
  output: {
    // 输出文件名
    filename: 'bundle.js',
    // 输出的文件名及路径
    path: path.resolve(__dirname, 'dist')
  },
  // 压缩JS代码
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
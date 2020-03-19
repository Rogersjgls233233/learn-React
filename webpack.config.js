const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin'); //在内存中自动生成html文件

// 创建一个插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, 'src/index.html'),
  filename: 'index.html'
});
module.exports = {
  mode: 'development',
  plugins: [htmlPlugin],
  module: {
    //第三方模块匹配规则
    rules: [
      //第三方匹配规则
      {
        test: /\.js|jsx$/,
        use: 'babel-loader',
        exclude: /node_modules/
      } //不要忘记加exclude排除项
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
    // 表示这几个文件的后缀名
  }
};

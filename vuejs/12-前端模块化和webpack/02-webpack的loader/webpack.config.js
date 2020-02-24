//通过该方式来动态获取输出目的地的绝对路径。其中的‘path’为node.js包中的，由node来解析。因此需要改包
// 通过 npm init 命令来初始化获取该包。
const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname,'dist'), //动态获取绝对路径
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/, //css文件的正则表达式匹配规则
        //css-loader 负责将css文件进行加载
        //style-loader 负责将css的style进行加载
        //使用多个loader时，是采用从右向左的顺序来执行的
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/, //less文件的正则表达式匹配规则
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/, //图片的正则匹配规则
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片，小于limit时，会将图片编译成base64字符串形式。
              // 当加载的图片，大于limit时，需要使用file-loader模块进行加载
              limit: 16000,
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        // exclude 排除某些文件夹
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  }
};
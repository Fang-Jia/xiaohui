
//1. 导入commonJS类型的数据
const {sum} = require('./js/aaa');
const {name} = require('./js/bbb');

//2. 导入css文件 需要使用 npm install --save-dev css-loader命令，来引入css-loader
require('./css/demo');

//3. 导入less文件 需要使用 npm install --save-dev less-loader less命令
require('./css/demo-less');

// 4. 在css样式中导入背景图片时，需要使用 npm install --save-dev url-loader 命令
// 5. 当css引入的图片，大于webpack.config.js内limit值时，需要使用 npm install --save-dev file-loader命令
// 6. 但是采用file-loader时，图片会被重命名放在dist文件夹内，因此需要在引用的图片路径前面加上dist文件集的路径名
// 7. 可以在webpack.config.js内，加上publicPath：‘dist/’
// 8. 若是想要在重命名该图片时采用自己定义的规则来命名，可以在webpack.config.js内的img-loader的options选项上添加
//   img：文件要打包到的文件夹  name：获取图片原来的名字，放在该位置
//   hash:8：为了防止图片名称冲突，依然使用hash，但是我们只保留8位   ext：使用图片原来的扩展名
//    格式：name: 'img/[name].[hash:8].[ext]'
// 9. ES6转化成ES5语法的方式 需要使用babel 在webpack中，我们直接使用babel对应的loader就可以了。
//      使用该 npm install --save-dev babel-loader@7 babel-core babel-preset-es2015 命令

console.log(sum(10, 20));
name();

// 10. 引入 vuejs 使用 npm install vue --save 命令
//      但是引入之后，运行代码，发现浏览器报错，这是因为当前为runtime-only，只有runtime-compiler可以解析vue模板
//        因此，我们可以在webpack.config.js文件内，加上resolve选项，并添加别名alias：{‘vue$’:'vue/dist/vue.esm.js'}
import Vue from 'vue';
import App from "./vue/App";
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
});

// 11.若要在自己打包的js中添加版权声明，则可以修改webpack.config.js的文件

// 12.压缩打包后的js文件 使用npm install uglifyjs-webpack-plugin@1.1.1 --save-dev 命令
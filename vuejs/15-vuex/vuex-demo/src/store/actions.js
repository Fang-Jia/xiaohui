export default {
  aUpdateInfo(context,payload){
    //  方式一   普通方式
    // setTimeout(() => {
    //   content.commit('updateInfo',payload)
    // },1000)

    //  方式二   通过返回一个Promise对象来实现异步操作  但是then方法，写在调用该方法那里
    return new Promise((resolve => {
      setTimeout(() => {
        context.commit('updateInfo',payload);
        console.log('名字已经被更改。。。。');
        resolve('接下来执行then方法。。。')
      },1000);
    }))
  }
}

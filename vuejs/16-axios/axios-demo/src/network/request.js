import axios from 'axios'

//  最终的隔离插件之间耦合性，并完成网络请求的方式
export function request(config) {
//    1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/hy',
    timeout: 5000
  });

  //  拦截器 interceptors  其中有request拦截器和response拦截器。
  //  每个拦截器都有两个函数类型的参数，一个为 请求/响应 成功时调用，一个为 请求/响应 失败时调用
  //  拦截成功之后最终要把结果返回，否则的话请求服务器的结果就不会响应给用户了
  instance.interceptors.request.use(config => {
    console.log(config);
    return config
  }, error => {
    console.log(error)
  });

  instance.interceptors.response.use(config => {
    console.log(config);
    return config.data
  }, error => {
    console.log(error)
  });


  //  instance实际上是axios实例，axios实例在执行完方法之后，会返回一个Promise类型实例，
  //  因此可以返回该方法，在调用那里处理该请求返回的参数，降低插件之间的耦合性
  return instance(config)
}




//    方式二 返回一个Promise对象   直接在调用那里使用then和catch方法
// export function request2(config) {
//   return new Promise(((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000/api/hy',
//       timeout: 5000
//     });
//
//     instance(config)
//       .then(res => {
//         resolve(res)
//     })
//       .catch(err => {
//       reject(err)
//     })
//   }))
// }

//    方式三   用户只需传入Config对象，里面携带url配置，数据处理方法，错误处理方法
// export function request3(config) {
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000/api/hy',
//     timeout: 5000
//   });
//
//   instance(config.baseConfig)
//     .then(res => {
//       config.success(res)
//     })
//     .catch(err => {
//       config.failure(err)
//     })
// }

//  方式四
// export function request4(config,success,failure) {
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000/api/hy',
//     timeout: 5000
//   });
//
//   instance(config)
//     .then(res => {
//       success(res)
//     })
//     .catch(err => {
//       failure(err)
//     })
// }



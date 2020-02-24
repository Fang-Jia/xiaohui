export default {
  // getters中定义的方法包含两个参数，第一个代表state，第二个参数则代表getters
  getAgeTo20(state){
    return state.students.filter(s => s.age > 20)
  },
  getAgeTo20Length(state,getter){
    return getter.getAgeTo20.length
  },
  // 可以通过返回一个函数，来动态的接收调用者传递的参数，并做相应的处理
  getMoreAge(state){
    return function (age) {
      return state.students.filter(s => s.age > age)
    }
  }
}

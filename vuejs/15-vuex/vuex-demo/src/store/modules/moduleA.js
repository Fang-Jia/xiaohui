export default {
  state: {
    name: 'zhang-san'
  },
  getters: {
    UpdateNameGetters(state){
      return state.name += '1001'
    }
  },
  mutations: {
    UpdateName(state,payload){
      state.name = payload
    }
  },
  actions: {
    deDynUpdateName(context){
      setTimeout(() =>{
        context.commit('UpdateName','xiao-fang');
        console.log(context)
      },1000)
    }
  }
};

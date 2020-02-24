export default {
  increment(state){
    state.counter++
  },
  incrementCount(state,payload){
    console.log(payload);
    state.counter += payload
  },
  decrement(state){
    state.counter--
  },
  updateInfo(state,name){
    state.info.name = name
  }
}

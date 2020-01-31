import { taskService } from '../service'

export const type = {
  state: {
    typeData: [],
    // key: ""
  },

  getters: {
    getTypes: state => {
      return state.typeData;
    },
    // getKey: state => {
    //   console.log("in task action----");
    //   return state.key;
    // },
  },

  mutations: {
    // getKey(state) {
    //   state.key = "" + state.taskData.createionDate.getYear() + state.taskData.createionDate.getMonth() + state.taskData.createionDate.getDate();
    // }
  },

  actions: {
    getType({state,commit}){
      taskService.getAllType()
      .then(res=>{
        console.log(res);
        state.typeData=res;
      })
    }
    // createTask({state, commit}, args) {
    //   state.taskData = args;
    //   commit("getKey");
    //   console.log(state.key);
    //   taskService.create(args,state.key);
    // },
    // updateTask({state,commit}, args){
    //   state.taskData = args.form;
    //   commit("getKey");
    //   console.log(state.key);
    //   taskService.update(args.taskList,state.key);
    // }
  }

}
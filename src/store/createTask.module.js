import { taskService } from '../service'

export const createTask = {
  state: {
    taskData: {},
    key: ""
  },

  getters: {
    getTasks: state => {
      return state.taskData;
    },
    getKey: state => {
      console.log("in task action----");
      return state.key;
    },
  },

  mutations: {
    getKey(state) {
      state.key = "" + state.taskData.createionDate.getYear() + state.taskData.createionDate.getMonth() + state.taskData.createionDate.getDate();
    }
  },

  actions: {
    createTask({state, commit}, args) {
      state.taskData = args;
      commit("getKey");
      console.log(state.key);

      taskService.create(args,state.key).then(res=>{
          console.log(res);
      }).catch(err=>{
        console.log(err);
      })

    }
  }

}
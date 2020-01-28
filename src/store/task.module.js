import { taskService } from '../service'

export const task = {
  state: {
    count: 0,
    currentDate: '',
    tasks: [],
    key: ""
  },

  getters: {
    getDate: state => {
      return state.currentDate;
    },
    getTasks: state => {
      console.log("in task action----");
      return state.tasks.tasks;
    },
  },

  mutations: {
    setKey(state) {
      state.key = "" + state.currentDate.getYear() + state.currentDate.getMonth() + state.currentDate.getDate();
    }
  },

  actions: {
    callFunction({state, commit}) {
      state.currentDate = new Date();
      commit("setKey");
      taskService.getTasks(state.key).then(res => {
        console.log(res);
        state.tasks = res.data;
      }).catch(error => {
        state.tasks = [];
        console.log(error);
      });
    },
    preDate({state, commit}) {
      state.currentDate.setDate(state.currentDate.getDate() - 1);
      state.currentDate = new Date(state.currentDate);
      commit("setKey");
      taskService.getTasks(state.key).then(res => {
        console.log(res);
        state.tasks = res.data;
      }).catch(error => {
        state.tasks = [];
        console.log(error);
      })
    },
    nextDate({state, commit}) {
      state.currentDate.setDate(state.currentDate.getDate() + 1);
      state.currentDate = new Date(state.currentDate);
      commit("setKey");
      taskService.getTasks(state.key).then(res => {
        console.log(res);
        state.tasks = res.data;
      }).catch(error => {
        state.tasks = [];
        console.log(error);
      })
    },
    deleteTask({state},args){
      console.log(args);
      state.tasks.tasks.splice(args,1);
      console.log(state.key);
      taskService.deleteTask(state.tasks.tasks,state.key)
    }
  }

}
import { taskService } from '../service'
import Axios from 'axios';

export const task = {
  state: {
    count: 0,
    currentDate: '',
    tasks: [],
    key: "",
    taskData: {},
  },

  getters: {
    getDate: state => {
      return state.currentDate;
    },
    getTasks: state => {
      // console.log("in task action----");
      return state.tasks.tasks;
    },
  },

  mutations: {
    setKey(state) {
      state.key = "" + state.currentDate.getYear() + state.currentDate.getMonth() + state.currentDate.getDate();
    },
    getKey(state) {
      state.key = "" + state.taskData.createionDate.getYear() + state.taskData.createionDate.getMonth() + state.taskData.createionDate.getDate();
    }
  },

  actions: {
    callFunction({state, commit}) {
      state.currentDate = new Date();
      commit("setKey");
      taskService.getTasks(state.key).then(res => {
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
        state.tasks = res.data;
      }).catch(error => {
        state.tasks = [];
        console.log(error);
      })
    },
    deleteTask({state}, args) {
      state.tasks.tasks.splice(args, 1);
      taskService.deleteTask(state.tasks.tasks, state.key)
    },
    updateAllTask({state, commit}) {
      // console.log("into update all task");
      taskService.getAllTask()
        .then(res => {
          let resp = res.data;
          resp.forEach(dateArr => {
            dateArr.tasks.forEach(task => {
              let today,
                diff,
                one_day,
                dueDate;
              today = new Date();
              dueDate = new Date(task.dueDate);
              diff = today.getTime() - dueDate.getTime();
              one_day = 1000 * 60 * 60 * 24;
              if (Math.round(diff / one_day) > 0 && task.status == "Created") {
                task.status = "Pending";
              }
            })
            taskService.update(dateArr.tasks, dateArr.id);
          })
        })
    },
    createTask({state, commit}, args) {
      // console.log(state.tasks);
      // arr.push(args);
      state.tasks.tasks.push(args);

      state.taskData = args;
      commit("getKey");
      console.log(state.key);
      taskService.create(args, state.key);
    },
    updateTask({state, commit}, args) {
      console.log(args);
      state.taskData = args.form;
      commit("getKey");
      console.log(state.key);
      taskService.update(args.taskList, state.key);
    }
  }

}
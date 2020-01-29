import { taskService } from '../service'

export const status = {
  state: {
    alltasks:[]
  },
  getters: {
    allTask:(state)=>{
        return state.alltasks;
    }
  },
  mutations: {

  },
  actions: {
    getAllTask({state, commit}){
        taskService.getAllTask()
        .then(res=>{
            state.alltasks = res.data;
            // console.log(res);
        })
    }
  }
}
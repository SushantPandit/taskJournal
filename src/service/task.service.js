import axios from 'axios';

export const taskService = {
  getTasks,
  create,
  update,
  deleteTask,
  getAllTask,
  getAllType
};

function getTasks(key) {
  return axios
    .get('http://localhost:3000/task/' + key)
    .then(res => {
      return res
    })
}

function create(taskInfo, key) {
  return axios
    .get('http://localhost:3000/task/' + key)
    .then(res => {
      let data = res.data.tasks;
      data.push(taskInfo);
      return axios
        .put('http://localhost:3000/task/' + key, {
          tasks: data
        })
    })
    .catch(res => {
      return axios
        .post('http://localhost:3000/task/', {
          tasks: [taskInfo],
          id: key
        })
    })
}

function update(taskInfo, key) {
  return axios
    .get('http://localhost:3000/task/' + key)
    .then(res => {
      return axios
        .put('http://localhost:3000/task/' + key, {
          tasks: taskInfo
        })
    })
    .catch(err => {
      console.log("error in update"+ err);
    })
}

function deleteTask(taskInfo, key) {
  return axios
    .get('http://localhost:3000/task/' + key)
    .then(res => {
      return axios
        .put('http://localhost:3000/task/' + key, {
          tasks: taskInfo
        })
    })
    .catch(err => {
      console.log("error in update"+ err);
    })
}
function getAllTask(){
  return axios
    .get('http://localhost:3000/task/')
    .then(res=>{
      return res
    })
    .catch(err=>{
      console.log(err);
    })
}

function getAllType(){
  return axios
  .get('http://localhost:3000/type/')
  .then(res=>{
    return res;
  })
  .catch(err=>{
    console.log(err);
  })
}

function setType(){

}

function setSubType(){
  
}
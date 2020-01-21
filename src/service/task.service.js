import axios from 'axios';

export const taskService = {
  getTasks,
  create
};

function getTasks(key) {
  return axios
    .get('http://localhost:3000/task/' + key)
    .then(res => {
      return res
    })
}

function create(taskInfo, key) {
  console.log('hit')
  return axios
    .post('http://localhost:3000/task/12008',{
      key
    })
}

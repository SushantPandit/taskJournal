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
  // console.log('hit')
  return axios
    .get('http://localhost:3000/task/' + key)
    .then(res => {
      // console.log(res);
      let data = res.data.tasks;
      data.push(taskInfo);
      return axios
        .put('http://localhost:3000/task/' + key, {
          tasks: data
        })
    })
    .catch(res => {
      // console.log("create data");
      return axios
        .post('http://localhost:3000/task/', {
          id: key,
          tasks: [taskInfo]
        })
    })
}

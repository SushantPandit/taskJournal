import Vue from 'vue';
import Router from 'vue-router';
import Calender from '@/components/Calender';
import CreateTask from '@/components/CreateTask';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Calender',
      component: Calender
    },
    // {
    //   path: '/Calender',
    //   name: 'Calender',
    //   component: Calender
    // },
    {
      path: '/CreateTask',
      name: 'CreateTask',
      component: CreateTask
    }
  ]
})

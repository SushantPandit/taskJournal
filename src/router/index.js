import Vue from 'vue';
import Router from 'vue-router';
import Calender from '@/components/Calender';
import CreateTask from '@/components/CreateTask';
import PendingComponent from '@/components/PendingComponent';
import CompletedComponent from '@/components/CompletedComponent';

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
    },
    {
      path: '/PendingComponent',
      name: 'PendingComponent',
      component: PendingComponent
    },
    {
      path: '/CompletedComponent',
      name: 'CompletedComponent',
      component: CompletedComponent
    }
  ]
})

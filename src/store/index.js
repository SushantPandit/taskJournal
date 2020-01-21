import Vue from 'vue';
import Vuex from 'vuex';

import { task } from './task.module';
import { createTask } from './createTask.module'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    task,
    createTask
  }
})
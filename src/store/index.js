import Vue from 'vue';
import Vuex from 'vuex';

import { task } from './task.module';
import { type } from './type.module'
import { status } from './taskStatus.module'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    task,
    type,
    status
  }
})
import Vue from 'vue'

import vuetify from '@/plugins/vuetify'
import Axios from '@/plugins/axios'
import Router from 'vue-router'

import Login from '@/components/Login'

import OuterBackground from '@/components/Outer'
import Teacher from '@/components/Teacher'
import Student from '@/components/Student'

import Calendar from '@/components/Calendar'

import AppBar from '@/components/AppBar'

Vue.prototype.$http = Axios
Vue.use(Router)

Vue.component('app-bar', AppBar)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/info/teacher'
    },
    {
      path: '/info',
      component: OuterBackground,
      children: [
        {
          path: 'teacher',
          component: Teacher
        },
        {
          path: 'student',
          component: Student
        }
      ]
    },
    {
      path: '/lab',
      component: OuterBackground,
      children: [
        {
          path: 'calendar',
          component: Calendar
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify,
  template: '<v-app><router-view></router-view></v-app>'
})

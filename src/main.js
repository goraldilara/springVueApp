import { createApp, VueElement } from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import LoginForm from './components/LoginForm.vue'
import Location from './components/Location.vue'

import 'bootstrap/dist/css/bootstrap.min.css'

import {createRouter, createWebHistory} from 'vue-router'  

const routes = [
{
    path: '/',
    name: 'Home',
    component: Home,//should be imported 
},
{
    path: '/LoginForm',
    name: 'LoginForm',
    component: LoginForm,    
},
{
  path: '/Locations',
  name: 'Locations',
  component: Location,    
},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
createApp(App).use(router).mount('#app')
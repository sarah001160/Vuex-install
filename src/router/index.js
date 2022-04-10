import Vue from 'vue'
import vueaxios from 'vue-axios'
import axios from 'axios'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Page from '@/components/Page'
import Childone from '@/components/Childone'

Vue.use(Router)
Vue.use(axios)//注意大小寫
Vue.use(vueaxios)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          path:'childone',
          name:'Childone',
          component:Childone,
        },
        {
          path: 'page',
          name: 'Page',
          component: Page,
        
       }

      ],
         
    },
  ]
})

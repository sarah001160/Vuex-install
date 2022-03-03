import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Page from '@/components/Page'
import Childone from '@/components/Childone'

Vue.use(Router)

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

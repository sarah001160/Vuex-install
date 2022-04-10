Vuex
概念

store資料夾> index.js
```
export default new Vuex.Store({
     strict:true, //嚴謹模式
      state{ //存資料的地方
          name:'',
          price:'',
      },
      mutations:{ //只有mutations可以更改state狀態
        Mname1(state, payload){
         state.name = payload
        },
        Mname2(state, status){
         state.price = status
        }
      },
      actions:{
        method1(context, status){
        context.commit('Mname1',status) //用.commit提交到Mname1的mutations
        },
        method2(context, status){
        context.commit('Mname2', status)
        }

      },
      getters:{ //同computed概念
      getCurrentName:(state)=>state.name,
      getPrice:(state)=>state.price

      }
      
})
```


# project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

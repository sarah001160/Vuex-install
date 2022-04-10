import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import axios from 'axios';
import vueaxios from 'vue-axios';

  

 export default new Vuex.Store({
     strict:true, //嚴謹模式
     state:{//不能操作狀態
        currentJoke:'Joke',//use mutations for changing this value
        allJokes:[],
        currentFruit:'Apple',
        isLoading:false,
        products:[],
        categories:[],
    },
    mutations:{//由action提交mutation、由mutaion操作state資料狀態
        setCurrentJoke(state,payload){//一定要放參數 第一個參數是state 第二個是payload也可以自行命名
            state.currentJoke = payload;
            state.allJokes.push(payload);
        },
        setCurrentFruit(state,payload){
            state.currentFruit = payload;
        },
        PRODUCTS(state, payload){
            state.products = payload;
        },
        CATEGORIES(state, payload){
            //const categories = new Set();
            //payload.forEach((item)=>{
              //  categories.add(item.category)
            //})
            //state.categories = Array.from(categories)
        },
        LOADING(state, status){//mutation改變資料狀態
            state.isLoading = status;
        }
    },
    actions:{//提交mutation
        updateLoading(context, status){
            context.commit('LOADING', status)//commit提交一個mutation
        },
        getProducts(context){ 
          const url=`https://vue-course-api.hexschool.io/practiceagain/admin/products/all`;
          //context.commit("LOADING", true);
          axios.get(url).then((response)=>{
           //   context.commit('PRODUCTS', reponse.data.products)
           //   context.commit('CATEGORIES', reponse.data.products)
              console.log('取得產品列表',response.data)
           //  context.commit('LOADING', false)
          })    
        }
    },
    // modules:{},
     getters:{ //同computed
         getcurrentJoke:(state)=> state.currentJoke,
         getFruit:(state)=> state.currentFruit,

    },//end of getters
})//end of export



import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)



  

export default new Vuex.store({
     state:{
        currentJoke:'Joke',//use mutations for changing this value
        allJokes:[]
    },
    mutations:{
        setCurrentJoke(state,payload){
            state.currentJoke = payload;
            state.allJokes.push(payload);

        }
    },
     actions:{},
     modules:{},
     getters:{
         getcurrentJoke:(state)=> state.currentJoke

    },//end of getters
})//end of export



<template>
 <div id="helloWorld">
 
    <Navbar></Navbar>
  
    
  
   <router-view></router-view>
   
 </div>
</template>

<script>
import Navbar from './Navbar'
import Page from './Page'

export default {
  name: 'HelloWorld',
  data:()=>({
    joke:'',
   
  }),
  methods:{
    getProducts(){
      //六角學院的api還沒設定好,我只是先把vuex寫法抄下來
      
      //this.$store.dispatch('getProducts')
    }
  },
  mounted(){
   this.joke = this.$store.getters.getcurrentJoke;
  },
  components:{
    Navbar,
    Page,
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: red;
}

</style>

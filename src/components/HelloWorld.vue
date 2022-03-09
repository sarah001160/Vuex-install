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
  mounted(){
   this.joke  = this.$store.getters.getcurrentJoke
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
  color: #42b983;
}
</style>

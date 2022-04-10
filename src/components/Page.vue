<template>
    <div id="Page">
      This is Page.vue
      {{joke}}
      <button @click="Toshow()">add</button>
      加油
      <div class="cardArea">
        <div v-for="item in arr" class="card"> 
          {{item}}
        </div>  
      </div>     
  
  
    </div>
 
</template>
<script>
export default{
  name:'Page',
  data:()=>({
    joke:'',
    arr:['apple','banana','cargo','fourth','fifith','sixth','fourth','fifith','sixth'],
  }),
  methods:{
     Toshow(){
       alert('success')
        this.$store.dispatch('getProducts');
     }
  },
  mounted(){
   this.joke = this.$store.getters.getcurrentJoke;
  
  },
}
</script>

<style lang="scss">

.cardArea{
 display:flex;
 flex-wrap:wrap;  
 flex-direction:row;
 gap:10px;
  margin:0;
  padding:0;
  .card{
    width:30%;
    height:300px;
    background:yellow;
   
  }
}

</style>

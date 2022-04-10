<template>
    <div id="Childone">
        This is Childone.vue
        {{fruit}}
      
    
    
    
    </div>

   
</template>
<script>
export default{
    name:'Childone',
    data:()=>({
        fruit:'',
    }),
    mounted(){
        this.fruit=this.$store.getters.getFruit;
    }
}
</script>


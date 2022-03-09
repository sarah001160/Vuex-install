<template>
  <div id="app">
    <router-view></router-view>

  </div>
</template>

<script>
import HelloWorld from'./components/HelloWorld'
export default {
  name: 'App',
  components:{
    HelloWorld,
  }
}
</script>

<style lang="scss">
@import './src/assets/global';
</style>

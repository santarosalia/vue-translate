<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <HelloI18n></HelloI18n>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HelloI18n from './components/HelloI18n.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    HelloI18n
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

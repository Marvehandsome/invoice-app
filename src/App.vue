<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Sidebar from './components/Sidebar-compnt.vue'
// import Login from './pages/Login.vue'


export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Sidebar,
    // Login
  },
  data() {
    return {
       title: 'My first vue app'
    } 
  }
}
</script>

<style>
/* .#App {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

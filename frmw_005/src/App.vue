<template>
  <div id="app">
    <RGB msg="My RGB Color"/>
  </div>
</template>

<script>
import RGB from './components/RGB.vue'

export default {
  name: 'app',
  components: {
    RGB
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

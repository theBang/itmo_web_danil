<template>
  <div id="app">
    <Tasker url="https://kodaktor.ru/j/tasklist"/>
  </div>
</template>

<script>
import Tasker from './components/Tasker.vue'

export default {
  name: 'app',
  components: {
    Tasker
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

<template>
  <div id="app">
    <h1>FRMW_003</h1>
    <h2>Данил Демашов</h2>
    <DegsMaker />
  </div>
</template>

<script>
import DegsMaker from './components/DegsMaker.vue'

export default {
  name: 'app',
  components: {
    DegsMaker
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

<template>
  <div>
    <h1>Два связанных текстовых поля (FRMW_002)</h1>
    <h2>Данил Демашов</h2>
    <input v-model="text"><br>
    <input v-model="text">
  </div>
</template>

<script>
export default {
  props: {
    text: String
  }
}
</script>

<style scoped>
  input {
    margin: 10px
  }
</style>

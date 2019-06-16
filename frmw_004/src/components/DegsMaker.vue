<template>
  <div>
    <button @click="++exps">⬆︎</button>
    <input v-model="exps" />
    <Degs :a = "Array.from({ length: this.exps }, (v, i) => 10 + i)"/>
  </div>
</template>

<script>
import Degs from './Degs.vue'

export default {
  name: 'DegsMaker',
  data: function () {
    return {
      exps: 5
    }
  },
  components: {
    Degs
  }
}
</script>

<style scoped>

</style>

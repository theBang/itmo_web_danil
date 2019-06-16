<template>
  <div>
    <ul>
      <li v-for="(item, index) in a" v-bind:key="index">
        <Deg :base="2" :exp="item" :key="index" />
      </li>
    </ul>
  </div>
</template>

<script>
import Deg from './Deg.vue'

export default {
  name: 'Degs',
  props: {
    a: Array
  },
  components: {
    Deg
  }
}
</script>

<style scoped>

</style>

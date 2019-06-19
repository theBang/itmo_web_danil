<template>
  <div class="color-input">
    <input
      type="number" 
      min="0" 
      max ="255"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
    <input
      type="range" 
      min="0" 
      max ="255"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'Color',
  props: {
    value: Number,
    text: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

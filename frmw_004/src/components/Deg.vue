<template>
  <div>
      <h1>
        <span>{{ base }}</span><sup>{{ exp }}</sup> = {{ base**exp }}
      </h1>
  </div>
</template>

<script>
export default {
  name: 'Deg',
  props: {
    base: Number,
    exp: Number,
  }
}
</script>

<style scoped>

</style>

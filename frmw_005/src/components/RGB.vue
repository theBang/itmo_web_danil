<template>
  <div class="rgb-color">
    <h1>FRMW_005</h1>
    <h2>Данил Демашов</h2>
    <h3 :style="styleObject">{{ msg }}: rgb({{ r }}, {{ g }}, {{ b }})</h3>
    <Color v-model.number="r" text="R" />
    <Color v-model.number="g" text="G" />
    <Color v-model.number="b" text="B" />
  </div>
</template>

<script>
import Color from './Color.vue'

export default {
  name: 'RGB',
  data: function() { 
    return {
      r: 255,
      g: 255,
      b: 255
    }
  },
  props: {
    msg: String
  },
  computed: {
    styleObject: function () {
      return {
        color: `rgb(${this.r}, ${this.g}, ${this.b})`,
        fontSize: '55px'
      }
    }
  },
  components: {
    Color
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

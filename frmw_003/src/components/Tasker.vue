<template>
  <div class="hello">
    <h1>Todos (FRMW_003)</h1>
    <h2>Данил Демашов</h2>
    <ol>
      <template v-for="(item, index) in list">
        <li :key="index">
          <input type="checkbox" :key="index" v-model="check_list" :value="index">
          {{ item }}
        </li>
      </template>
    </ol>
    <input v-model="text"/>
    <button @click="add">Добавить</button>
    <button @click="remove">Удалить</button>
  </div>
</template>

<script>
export default {
  name: 'Tasker',
  data: function () {
    return {
      list: [],
      check_list: [],
      text: 'Пустое'
    }
  },
  props: ['url'],
  created: async function () {
    const { list } = await fetch(this.url).then(x => x.json());
    this.list.push(...list);
  },
  methods: {
    add: function () {
      this.list.push(this.text);
    },
    remove: function () {
      let temp = [...this.check_list];
      this.list = this.list.filter(function (v, i) {
        return !temp.some(it => it == i);
      });
      this.check_list = [];
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  list-style: decimal;
  display: list-item;
}

h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}
</style>

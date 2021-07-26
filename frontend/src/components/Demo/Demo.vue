<template>
  <div>
    <body style="margin-left: 15px;">
      <h1>These are all my demos:</h1>
      <button class="onglet" @click="dynamicComp = 'counter'">Counter</button>
      <button class="onglet" @click="dynamicComp = 'mycanvas'">Canvas</button>
      <button class="onglet" @click="dynamicComp = 'makeModale'">Modale</button>
      <button class="onglet" @click="dynamicComp = 'randomCat'">Cat</button>
      <button class="onglet" @click="dynamicComp = 'todo'">Todo</button>
      <component :is="dynamicComp"></component>
    </body>
  </div>
</template>

<script lang="ts">
import Counter from '../Counter/Counter.vue'
import Canvas from '../Canvas/Canvas.vue'
import makeModale from '../makeModale/makeModale.vue'
import RandomCat from '../RandomCat/RandomCat.vue'
import Todo from '../Todo/Todo.vue'

export default {
  name: 'Demo',
  data() {
    return {
      dynamicComp: "counter",
    };
  },
  methods: {
  },
  components: {
    counter: Counter,
    mycanvas: Canvas,
    makeModale: makeModale,
    randomCat: RandomCat,
    todo: Todo,
  },
}
</script>

<style scoped src="./Demo.css">
</style>

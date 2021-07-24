<template>
  <div>
    <button class="count-button" @click="counter++">Add</button>
    <button class="count-button" @click="counter--">Sub</button>
    <p>This is my counter lol: {{counter}}</p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Counter',
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
  },
  components: {
  },
}
</script>

<style scoped src="./Counter.css">
</style>

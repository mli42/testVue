<template>
  <div class="wholeModale useAllPage" v-if="showModale">
    <div class="overlay useAllPage" @click="toggleModale"></div>
    <div class="modaleContent whiteBG">
      <button class="modaleBtnOff" @click="toggleModale">
        Close X
      </button>
      <h2 class="whiteBG">Hahaha je t'ai eu!</h2>
    </div>

  </div>
</template>

<script lang="ts">
export default {
  name: 'Modale',
  data() {
    return {
    };
  },
  methods: {
  },
  props: ['showModale', 'toggleModale'],
}
</script>

<style scoped src="./Modale.css">
</style>

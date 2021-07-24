<template>
  <div>
    <button class="modaleBtnOn" @click="toggleModale()">
      <slot></slot>
    </button>

    <template class="wholeModale useAllPage" v-if="showModale">
      <div class="overlay useAllPage" @click="toggleModale()"></div>
      <div class="modaleContent">
        <button class="modaleBtnOff" @click="toggleModale()">
          Close X
        </button>
        Hahaha je t'ai eu!
      </div>
    </template>

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

<template>
  <div>
    <button class="modaleBtnOn" @click="toggleModale">
      Clique allez stp là!!!
    </button>
    <modale :showModale="showModale" :toggleModale="toggleModale"></modale>
  </div>
</template>

<script lang="ts">
import Modale from '../Modale/Modale.vue'

export default {
  name: 'makeModale',
  data() {
    return {
      showModale: false as boolean,
    };
  },
  methods: {
    toggleModale(): void {
      //@ts-ignore
      this.showModale = !this.showModale;
    },
  },
  components: {
   modale: Modale,
  },
}
</script>

<style scoped src="./makeModale.css">
</style>

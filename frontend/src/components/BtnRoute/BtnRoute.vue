<template>
  <div class="buttons">
    <router-link v-for="(route, index) in Routes" :key="index" :to="route.path"
    class="route">
      <p>{{route.component.name}}</p>
    </router-link>
  </div>
</template>

<script lang="ts">
import Routes from '../../Routes'

export default {
  name: 'BtnRoute',
  data() {
    return {
      Routes: Routes as unknown,
    };
  },
}
</script>

<style scoped src="./BtnRoute.css">
</style>

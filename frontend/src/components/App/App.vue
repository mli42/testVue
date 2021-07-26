<template>
  <div id="myapp">
    <header id="header" class="flex-container">
      <img id="pong-logo" alt="pong-logo" src="../../assets/logo.png">
      <h1>&#x2728; Deluxe Pong &#x2728;</h1>
    </header>
    <btnroute></btnroute>
    <hr/>
    <br/>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import BtnRoute from '../BtnRoute/BtnRoute.vue'

export default {
  name: 'App',
  data() {
    return {
    };
  },
  methods: {
  },
  components: {
    btnroute: BtnRoute,
  },
}
</script>

<style src="./App.css">
</style>

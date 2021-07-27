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
    <footer class="notweather" v-if="toggleFooter">
      I know you're not in the Weather tab
    </footer>
  </div>
</template>

<script lang="ts">
import BtnRoute from '../BtnRoute/BtnRoute.vue'
import EventBus from '../../bus'

export default {
  name: 'App',
  data() {
    return {
      toggleFooter: true as boolean,
    };
  },
  methods: {
    changeToggleFooter(bool: boolean) {
      this.toggleFooter = bool;
    },
  },
  components: {
    btnroute: BtnRoute,
  },
  created() {
    EventBus.$on("changeToggleFooter", this.changeToggleFooter);
  },
  destroyed() {
    EventBus.$off("changeToggleFooter", this.changeToggleFooter);
  },
}
</script>

<style src="./App.css">
</style>

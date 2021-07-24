<template>
  <div id="myapp">
    <header id="header" class="flex-container">
      <img id="pong-logo" alt="pong-logo" src="../../assets/logo.png">
      <h1>&#x2728; Deluxe Pong &#x2728;</h1>
    </header>
    <hr/>
    <br/>
    <body id="subapps">
      <h1>This is a title</h1>
      <counter></counter>
      <mycanvas></mycanvas>
      <modale :showModale="showModale" :toggleModale="toggleModale">
        Clique allez stp là!!!
      </modale>
    </body>
  </div>
</template>

<script lang="ts">
import Counter from '../Counter/Counter.vue'
import Canvas from '../Canvas/Canvas.vue'
import Modale from '../Modale/Modale.vue'

export default {
  name: 'App',
  data() {
    return {
      showModale: false as boolean,
      toggleModale(): void {
        this.showModale = !this.showModale;
      },
    };
  },
  methods: {
  },
  components: {
    counter: Counter,
    mycanvas: Canvas,
    modale: Modale,
  },
}
</script>

<style src="./App.css">
</style>

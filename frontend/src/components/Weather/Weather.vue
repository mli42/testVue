<template>
  <div>
    <body style="margin-left: 15px;">
      <h1>My Weather App</h1>
      <p>(No app here sorry)</p>
      <p>If only I had a footer :(</p>
    </body>
  </div>
</template>

<script lang="ts">
import EventBus from '../../bus'

export default {
  name: 'Weather',
  data() {
    return {
    };
  },
  methods: {
  },
  components: {
  },
  mounted() {
    EventBus.$emit("changeToggleFooter", false);
  },
  beforeDestroy() {
    EventBus.$emit("changeToggleFooter", true);
  },
}
</script>

<style scoped src="./Weather.css">
</style>

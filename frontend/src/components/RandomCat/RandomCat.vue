<template>
  <div>
    <img style="width: 50%; height: 50%;"
    :src="urlImg" alt="this is probably a cat image">
  </div>
</template>

<script lang="ts">
import axios from 'axios'

export default {
  name: 'RandomCat',
  data() {
    return {
      urlImg: "" as string,
    };
  },
  methods: {
  },
  created() {
    const _this: any = this;
    axios.get("https://api.thecatapi.com/v1/images/search")
    .then(resp => { _this.urlImg = resp.data[0].url; })
  }
}
</script>

<style scoped src="./RandomCat.css">
</style>

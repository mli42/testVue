<template>
  <div>
    <canvas id="this_canvas" @mousemove="updateCoords"></canvas>
    <p :style="dynamicColor">
      Mouse coord are: x={{mouse.x}} y={{mouse.y}}
    </p>
  </div>
</template>

<script lang="ts">
import Coords from '../../types/Coords'

export default {
  name: 'Canvas',
  data() {
    return {
      mouse: {x: 0, y: 0} as Coords,
      dynamicColor: {} as object,
    };
  },
  methods: {
    updateCoords(e: MouseEvent): void {
      let _this: any = this;

      _this.mouse.x = e.offsetX;
      _this.mouse.y = e.offsetY;
      if (_this.mouse.x > 250 && _this.mouse.y < 250)
        _this.dynamicColor['color'] = "red";
      else if (_this.mouse.x > 250 && _this.mouse.y > 250)
        _this.dynamicColor['color'] = "blue";
      else if (_this.mouse.x < 250 && _this.mouse.y > 250)
        _this.dynamicColor['color'] = "yellow";
      else if (_this.mouse.y < 250 && _this.mouse.y < 250)
        _this.dynamicColor['color'] = "aqua";
    },
  },
  components: {
  },
}
</script>

<style scoped src="./Canvas.css">
</style>

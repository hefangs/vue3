<template>
  <div class="son">
    <h2>我是Son组件:name:{{ car.name }}---price:{{ car.price }}</h2>
  </div>
</template>

<script>
import { inject } from "vue"
export default {
  name: "Son",
  setup() {
    let car = inject("car")
    return {
      car
    }
  }
}
</script>
<style>
.son {
  background: skyblue;
  padding: 20px;
}
</style>

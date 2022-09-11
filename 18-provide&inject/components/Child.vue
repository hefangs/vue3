<template>
  <div class="child">
    <h2>我是Child组件:name:{{ car.name }}---price:{{ car.price }}</h2>
    <Son />
  </div>
</template>

<script>
import Son from "./Son.vue"
import { inject } from "vue"
export default {
  name: "Child",
  components: { Son },
  setup() {
    let car = inject("car")
    return {
      car
    }
  }
}
</script>
<style>
.child {
  background: burlywood;
  padding: 20px;
}
</style>

<template>
  <div class="app">
    <h2>我是App组件:{{ name }}----{{ price }}</h2>
    <Child />
  </div>
</template>
<script>
import { provide, reactive, toRefs } from "vue"

export default {
  name: "App",

  setup() {
    let car = reactive({
      name: "BWM",
      price: 40
    })
    provide("car", car)
    return {
      ...toRefs(car)
    }
  }
}
</script>

<style>
.app {
  background: gray;

  padding: 20px;
}
</style>

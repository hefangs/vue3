<template>
  <div class="app">
    <h2>我是App组件:name:{{ name }}---price:{{ price }}</h2>
    <Child />
  </div>
</template>
<script>
import { provide, reactive, toRefs } from "vue"
import Child from "./components/Child"
export default {
  name: "App",
  components: { Child },
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

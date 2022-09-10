<template>
  <h2>求和：{{ sum }}</h2>
  <button @click="sum++">sum++</button>
  <br />
  <hr />
  <h2>当前的坐标是x:{{ point.x }},y:{{ point.y }}</h2>
</template>

<script>
import { ref } from "vue"
import usePoint from "../hooks/usePoint"
export default {
  name: "demoTest",
  setup() {
    let sum = ref(0)
    let point = usePoint()
    // console.log(usePoint())
    return {
      sum,
      point
    }
  }
}
</script>

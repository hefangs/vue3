<template>
  <h2>求和：{{ sum }}</h2>
  <button @click="sum++">sum++</button>
</template>

<script>
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref
} from "vue"
export default {
  name: "demoTest",
  setup() {
    let sum = ref(0)
    onBeforeMount(() => {
      console.log("---onBeforeMount---")
    })
    onMounted(() => {
      console.log("---onMounted---")
    })
    onBeforeUpdate(() => {
      console.log("---onBeforeUpdate---")
    })
    onUpdated(() => {
      console.log("---onUpdated---")
    })
    onBeforeUnmount(() => {
      console.log("---onBeforeUnmount---")
    })
    onUnmounted(() => {
      console.log("---onUnmounted---")
    })
    return {
      sum
    }
  }
}
</script>

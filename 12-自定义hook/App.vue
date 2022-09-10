<template>
  <div>
    <demoTest v-if="isShow"></demoTest>
    <button @click="isShow = !isShow">显示或者隐藏</button>
  </div>
</template>

<script>
import demoTest from "./components/demoTest"
import { ref } from "vue"
export default {
  name: "App",
  components: { demoTest },
  setup() {
    let isShow = ref(true)
    return {
      isShow
    }
  }
}
</script>

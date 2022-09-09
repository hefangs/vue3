<template>
  <demoTest msg="hello" @hello="sayHello">
    <template v-slot:test1>
      <span>abc1</span>
    </template>
    <template v-slot:test2>
      <span>abc2</span>
    </template>
  </demoTest>
</template>

<script>
import demoTest from "./components/demoTest"
export default {
  name: "App",
  components: { demoTest },
  setup() {
    function sayHello(value) {
      alert(value)
    }
    return {
      sayHello
    }
  }
}
</script>

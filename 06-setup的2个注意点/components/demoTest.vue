<template>
  <h1>个人信息</h1>
  <h2>姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <h2>{{ msg }}</h2>
  <button @click="say">say</button>
  <slot name="test1"></slot>
  <slot name="test2"></slot>
</template>

<script>
import { reactive } from "vue"
export default {
  name: "demoTest",
  props: ["msg"],
  emits: ["hello"],
  // beforeCreate() {
  //   console.log("beforeCreate")
  // },
  // mounted() {
  //   console.log(this)
  // },
  setup(props, context) {
    // console.log(props)
    // console.log(context.attrs.msg)
    // console.log(context.emit)
    console.log(context.slots)

    // console.log("setup", this)
    let person = reactive({
      name: "John",
      age: 18
    })
    function say() {
      context.emit("hello", 666)
    }
    return {
      person,
      say
    }
  }
}
</script>

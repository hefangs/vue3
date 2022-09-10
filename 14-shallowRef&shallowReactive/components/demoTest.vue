<template>
  <h1>个人信息：</h1>
  <h2>{{ person }}</h2>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}k</h2>
  <button @click="name += '@'">更新姓名</button>
  <button @click="age++">更新年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>
<script>
import { reactive, toRefs, ref, shallowReactive, shallowRef } from "vue"
export default {
  name: "demoTest",
  setup() {
    // let person = ref({
    // let person = shallowRef({
    // let person = shallowReactive({
    let person = reactive({
      name: "Tom",
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })

    return {
      person,
      ...toRefs(person)
    }
  }
}
</script>

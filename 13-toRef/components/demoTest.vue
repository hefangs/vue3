<template>
  <h1>个人信息：</h1>
  <h2>{{ person }}</h2>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ salary }}k</h2>
  <button @click="name += '@'">更新姓名</button>
  <button @click="age++">更新年龄</button>
  <button @click="salary++">涨薪</button>
</template>
<script>
import { reactive, toRef, ref } from "vue"
export default {
  name: "demoTest",
  setup() {
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
      name: toRef(person, "name"),
      age: toRef(person, "age"),
      salary: toRef(person.job.j1, "salary")
    }
  }
}
</script>

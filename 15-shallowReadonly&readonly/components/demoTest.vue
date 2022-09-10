<template>
  <h2>sum:{{ sum }}</h2>
  <button @click="sum++">sum++</button>
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
import { reactive, toRefs, ref, readonly, shallowReadonly } from "vue"
export default {
  name: "demoTest",
  setup() {
    let sum = ref(0)
    let person = reactive({
      name: "Tom",
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })
    // person = readonly(person)
    // person = shallowReadonly(person)
    // sum = readonly(sum)
    // sum = shallowReadonly(sum)
    return {
      sum,
      person,
      ...toRefs(person)
    }
  }
}
</script>

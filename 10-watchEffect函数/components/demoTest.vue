<template>
  <h2>求和：{{ sum }}</h2>
  <button @click="sum++">sum++</button>
  <h1>个人信息：</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>薪资：{{ person.job.j1.salary }}k</h2>
  <button @click="person.name += '@'">更新姓名</button>
  <button @click="person.age++">更新年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
import { watch, ref, reactive, watchEffect } from "vue"
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
    watch(sum, (newVal, oldVla) => {
      console.log(newVal, oldVla)
    })
    watch(
      () => person,
      (newVal, oldVla) => {
        console.log(newVal, oldVla)
      }
    )
    watchEffect(() => {
      let x1 = person.job.j1.salary
      console.log(x1)
    })
    return {
      sum,
      person
    }
  }
}
</script>

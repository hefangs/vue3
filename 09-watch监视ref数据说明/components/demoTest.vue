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
import { watch, ref } from "vue"
export default {
  name: "demoTest",
  // watch属性vue2的写法：
  // data() {
  //   return {
  //     sum: 0
  //   }
  // },
  // watch: {
  //   sum: {
  //     immediate: true,
  //     deep: true,
  //     handler(newVal, oldVla) {
  //       console.log(newVal, oldVla)
  //     }
  //   }
  // }
  setup() {
    let sum = ref(0)
    let person = ref({
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
      // console.log(sum)
    })
    // watch(
    //   person,
    //   (newVal, oldVla) => {
    //     console.log(newVal, oldVla)
    //     // console.log(person)
    //   },
    //   { deep: true }
    // )
    watch(person.value, (newVal, oldVla) => {
      console.log(newVal, oldVla)
      // console.log(person)
    })

    return {
      sum,
      person
    }
  }
}
</script>

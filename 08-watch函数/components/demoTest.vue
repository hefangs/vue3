<template>
  <h2>求和：{{ sum }}</h2>
  <button @click="sum++">sum++</button>
  <h2>消息：{{ msg }}</h2>
  <button @click="msg += '!'">sum++</button>
  <h1>个人信息：</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>薪资：{{ person.job.j1.salary }}k</h2>
  <button @click="person.name += '@'">更新姓名</button>
  <button @click="person.age++">更新年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
import { watch, reactive, ref } from "vue"
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
    let msg = ref("hello")
    let person = reactive({
      name: "Tom",
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })
    // 情况1：vue3  watch监视（ref定义的1个响应式数据）：
    // watch(
    //   sum,
    //   (newVal, oldVla) => {
    //     console.log(newVal, oldVla)
    //   },
    //   { immediate: true }
    // )

    // 情况2：vue3 watch监视（ref定义的多个响应式数据）：
    // watch(
    //   [sum, msg], //多个响应式数据以数组展示
    //   (newVal, oldVla) => {
    //     console.log(newVal, oldVla)
    //   },
    //   { immediate: true }
    // )

    //  情况3：vue3 watch监视（reactive定义的1个响应式数据）全部属性：
    // 1.无法获取到oldVal
    // 2.强制开启了深度监视（deep配置无效 ）
    // watch(
    //   person,
    //   (newVal, oldVal) => {
    //     console.log(newVal, oldVal)
    //   },
    //   { deep: true } //此处的deep无效
    // )

    // 情况4：vue3 watch监视（reactive定义的1个响应式数据）1个属性：
    // watch(
    //   () => person.age,
    //   (newVal, oldVal) => {
    //     console.log(newVal, oldVal)
    //   }
    // )

    // 情况5：vue3 watch监视（reactive定义的1个响应式数据）多个属性：
    // watch([() => person.name, () => person.age], (newVal, oldVal) => {
    //   console.log(newVal, oldVal)
    // })

    //特殊情况：如果当前监视的job是一个对象，需要增加deep: true
    watch(
      () => person.job,
      (newVal, oldVal) => {
        console.log(newVal, oldVal) //这里还是无法获取到oldVal
      },
      { deep: true }
    )

    return {
      sum,
      msg,
      person
    }
  }
}
</script>

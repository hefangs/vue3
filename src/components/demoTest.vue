<template>
  <h2>sum:{{ sum }}</h2>
  <button @click="sum++">sum++</button>
  <h1>个人信息：</h1>
  <h2>{{ person }}</h2>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}k</h2>
  <h2 v-show="person.car">座驾：{{ person.car }}</h2>
  <button @click="name += '@'">更新姓名</button>
  <button @click="age++">更新年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
  <button @click="addCar">增加car</button>
  <button @click="addCarName">addCarName</button>
  <button @click="addCarPrice">addCarPrice</button>
  <button @click="showPerson">输出原始person数据</button>
</template>
<script>
import { reactive, toRefs, ref, toRaw, markRaw } from "vue"
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
    // function showPerson() {
    //   let p1 = toRaw(person)
    //   const sum1 = toRaw(sum)
    //   console.log(p1) //返回是原始数据
    //   console.log(sum1) //返回是refImpl
    // }
    function addCar() {
      let cat = { name: "BWM", price: "20" }
      person.car = markRaw(cat)
    }
    function addCarName() {
      person.car.name += "!"
    }
    function addCarPrice() {
      person.car.price++
    }
    return {
      // showPerson,
      sum,
      person,
      ...toRefs(person),
      addCar,
      addCarName,
      addCarPrice
    }
  }
}
</script>

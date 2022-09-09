<template>
  <h1>一个人的信息：</h1>
  <h2>姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <h2 v-show="person.sex">性别:{{ person.sex }}</h2>
  <h2>职业:{{ person.job.type }}</h2>
  <h2>薪水:{{ person.job.salary }}</h2>
  <h2>测试数据c:{{ person.job.a.b.c }}</h2>
  <button @click="changeInfo">修改个人信息</button>
  <button @click="addSex">addSex</button>
  <button @click="deleteSex">deleteSex</button>
</template>

<script>
import { reactive } from "vue"
export default {
  name: "App",
  setup() {
    let person = reactive({
      name: "Tom",
      age: 18,
      job: {
        type: "前端工程师",
        salary: "10K",
        a: {
          b: {
            c: 666
          }
        }
      }
    })
    function changeInfo() {
      person.name = "Joy"
      person.age = 20
      person.job.type = "UI设计师"
      person.job.salary = "20k"
      person.job.a.b.c = 999
      console.log(person)
    }
    function addSex() {
      person.sex = "女"
    }
    function deleteSex() {
      delete person.sex
    }

    return {
      person,
      changeInfo,
      addSex,
      deleteSex
    }
  }
}
</script>

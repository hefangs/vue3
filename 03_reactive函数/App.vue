<template>
  <h1>一个人的信息：</h1>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>职业:{{ job.type }}</h2>
  <h2>薪水:{{ job.salary }}</h2>
  <h2>测试数据c:{{ job.a.b.c }}</h2>
  <button @click="changeInfo">修改个人信息</button>
</template>

<script>
import { ref, reactive } from "vue"
export default {
  name: "App",
  setup() {
    let name = ref("Tom")
    let age = ref(18)
    let job = reactive({
      type: "前端工程师",
      salary: "10K",
      a: {
        b: {
          c: 666
        }
      }
    })
    function changeInfo() {
      name.value = "Joy"
      age.value = 28
      job.type = "UI设计师"
      job.salary = "20K"
      job.a.b.c = 999
    }
    return {
      name,
      age,
      job,
      changeInfo
    }
  }
}
</script>

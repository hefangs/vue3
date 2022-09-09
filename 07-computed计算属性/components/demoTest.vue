<template>
  <h1>个人信息</h1>
  firstName:
  <input v-model="person.firstName" />
  <br />
  <br />
  firstName:
  <input v-model="person.lastName" />
  <br />
  <br />
  fullName:
  <input v-model="person.fullName" />
</template>

<script>
import { reactive, computed } from "vue"
export default {
  name: "demoTest",
  // vue2里面的写法computed来写fullName
  // computed: {
  //   fullName() {
  //     return this.person.firstName + "-" + this.person.lastName
  //   }
  // },
  // setup() {
  //   let person = reactive({
  //     firstName: "John",
  //     lastName: "Tom"
  //   })
  //   return {
  //     person
  //   }
  // }

  // vue3写法：
  setup() {
    let person = reactive({
      firstName: "John",
      lastName: "Tom"
    })
    // 计算属性简写（没有考虑计算属性被修改情况）
    // person.fullName = computed(() => {
    //   return person.firstName + "-" + person.lastName
    // })

    //fullName的完整写法（考虑读和写）
    person.fullName = computed({
      get() {
        return person.firstName + "-" + person.lastName
      },
      set(value) {
        let nameArr = value.split("-")
        person.firstName = nameArr[0]
        person.lastName = nameArr[1]
      }
    })
    return {
      person
    }
  }
}
</script>

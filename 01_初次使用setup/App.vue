<template>
  <h1>一个人的信息：</h1>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <button @click="sayHello">VUE3-sayHello</button>
  <h2>性别:{{ sex }}</h2>
  <button @click="sayWelcome">VUE2-sayWelcome</button>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      sex: "男"
    }
  },
  // 在vue2中能正常读取vue3 setup中的数据和方法
  methods: {
    sayWelcome() {
      console.log("sayWelcome")
      console.log(this.sex)
      console.log("--------------")
      console.log(this.name)
      console.log(this.age)
      console.log(this.sayHello)
    }
  },
  setup() {
    let name = "Tom"
    let age = 18
    // 在vue3 setup方法中无法读取vue2中的数据  返回undefined
    function sayHello() {
      console.log("Hello world")
      console.log(name)
      console.log(age)
      console.log("------------------")
      console.log(this.sex)
      console.log(this.sayWelcome)
    }
    return {
      name,
      age,
      sayHello
    }
  }
}
</script>

<template>
  <h2>name:{{ p.name }}</h2>
  <h2>age:{{ p.age }}</h2>
</template>

<script>
// import { reactive } from "vue"
export default {
  // data() {
  //   return {
  //     person: {
  //       name: "John",
  //       age: 18
  //     }
  //   }
  // },
  // methods: {
  //   // 模拟Vue2的响应式原理
  //   fn() {
  //     let p = {}
  //     Object.defineProperty(p, "name", {
  //       get() {
  //         return this.person.name
  //       },
  //       set(value) {
  //         this.person.name = value
  //       }
  //     })
  //     Object.defineProperty(p, "age", {
  //       get() {
  //         return this.person.age
  //       },
  //       set(value) {
  //         this.person.age = value
  //       }
  //     })
  //   }
  // },
  setup() {
    // 通过Proxy（代理）：拦截对象中任意属性的变化，包括属性值的读写，添加，删除等
    // 通过Reflect（反射）：对被代理对象的属性进行操作
    let p = new Proxy(
      { name: "Tom", age: 18 },
      {
        // 读取
        get(target, propName) {
          return Reflect.get(target, propName)
        },
        // 新增 & 修改
        set(target, propName, value) {
          return Reflect.set(target, propName, value)
        },
        // 删除
        deletePrototype(target, propName) {
          return Reflect.deletePrototype(target, propName)
        }
      }
    )
    return {
      p
    }
  }
}
</script>

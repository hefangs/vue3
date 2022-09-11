<template>
  <input type="text" v-model="keyword" />
  <h2>{{ keyword }}</h2>
</template>

<script>
import { customRef } from "vue"
export default {
  setup() {
    // 自定义一个ref
    let keyword = myRef("hello", 500)
    function myRef(value, delay) {
      let timer
      return customRef((track, trigger) => {
        return {
          get() {
            track() // 通知vue追踪value的变化
            return value
          },
          set(newValue) {
            if (timer) clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue
              trigger() //通知vue重新解析模板
            }, delay)
          }
        }
      })
    }
    return {
      keyword,
      myRef
    }
  }
}
</script>

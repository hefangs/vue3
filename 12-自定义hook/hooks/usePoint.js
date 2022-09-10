import { reactive, onMounted, onBeforeUnmount } from "vue"
function usePoint() {
  let point = reactive({
    x: 0,
    y: 0
  })
  function savePoint(e) {
    console.log(e.pageX, e.pageY)
    point.x = e.pageX
    point.y = e.pageY
  }
  onMounted(() => {
    window.addEventListener("click", savePoint)
  })
  onBeforeUnmount(() => {
    window.removeEventListener("click", savePoint)
  })
  return point
}

export default usePoint

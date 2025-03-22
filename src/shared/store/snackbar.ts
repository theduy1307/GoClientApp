import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useSnackbarStore = defineStore('snackbar', () => {
  const show = ref(false)
  const message = ref('')
  const color = ref('success') // success | error | warning | info
  const icon = computed(() => {
    switch (color.value) {
      case 'success':
        return 'mdi mdi-check-circle-outline'
      case 'error':
        return 'mdi mdi-close-circle'
      case 'warning':
        return 'mdi mdi-alert'
      case 'info':
        return 'mdi mdi-information-variant-circle'
      default:
        return 'info'
    }
  })

  // Hàm hiển thị snackbar
  const showSnackbar = (msg: string, type: string, duration: number) => {
    message.value = msg
    color.value = type
    show.value = true

    // Ẩn sau khoảng thời gian
    setTimeout(() => {
      show.value = false
    }, duration)
  }

  return { show, message, color, icon, showSnackbar }
})

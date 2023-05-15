import axios from "axios"
import { ref } from "vue"

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

http.interceptors.request.use((config) => {
  const user = ref(JSON.parse(localStorage.getItem("user")))
  if (user.value && user.value.token && config.headers) {
    config.headers["Authorization"] = "Bearer " + user.value.token
  }

  return config
})
export default http

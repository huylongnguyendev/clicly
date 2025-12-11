import { baseApi } from "@/lib/apis/base.api"
import { LoginType, RegisterType } from "@/lib/types/form.type"

export const authService = {
  register: async (data: RegisterType) => {
    const res = await baseApi.post("/auth/register", data, { withCredentials: true })
    return res.data
  },
  login: async (data: LoginType) => {
    const res = await baseApi.post("/auth/login", data, { withCredentials: true })
    return res.data
  }
}
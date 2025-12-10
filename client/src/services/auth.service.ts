import { baseApi } from "@/lib/apis/base.api"
import { RegisterType } from "@/lib/types/form.type"

export const authService = {
  register: async (data: RegisterType) => {
    const res = await baseApi.post("/auth/register", data, { withCredentials: true })
    return res.data
  }
}
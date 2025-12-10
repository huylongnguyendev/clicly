import { RegisterFormType } from "@/lib/types/form.type"

export const FormParser = {
  register: (data: RegisterFormType) => {
    const { phone, role } = data
    const password = data.password.trim()
    
    return { phone, role, password }
  }
}
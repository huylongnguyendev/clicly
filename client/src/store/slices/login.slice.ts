import { User } from "@/lib/types/user.type"
import { createSlice } from "@reduxjs/toolkit"

interface RegisterState {
  user: User | null
  accessToken: string | null
}

const initialState = {
  user: null,
  accessToken: null
} satisfies RegisterState as RegisterState

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user
      state.accessToken = action.payload.accessToken
    }
  },
})

const loginReducer = loginSlice.reducer
export default loginReducer
export const { setUser } = loginSlice.actions
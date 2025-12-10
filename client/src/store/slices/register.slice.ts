import { createSlice } from "@reduxjs/toolkit"

interface RegisterState {
  phone: string
  password: string
}

const initialState = {
  phone: "",
  password: ""
} satisfies RegisterState as RegisterState

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {

  }
})

const registerReducer = registerSlice.reducer
export default registerReducer
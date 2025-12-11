import { createSlice } from "@reduxjs/toolkit"

interface ToggleState {
  isOpenMenu: boolean

}

const initialState = {
  isOpenMenu: false
} satisfies ToggleState as ToggleState

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    setIsOpenMenu: (state, action) => {
      state.isOpenMenu = action.payload
    }
  }
})

const toggleReducer = toggleSlice.reducer
export default toggleReducer
export const { setIsOpenMenu } = toggleSlice.actions

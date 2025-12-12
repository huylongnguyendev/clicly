import { createSlice } from "@reduxjs/toolkit"

interface ToggleState {
  isOpenMenu: boolean
  isOpenSearch: boolean
}

const initialState = {
  isOpenMenu: false,
  isOpenSearch: false
} satisfies ToggleState as ToggleState

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    setIsOpenMenu: (state, action) => {
      state.isOpenMenu = action.payload
    },
    setIsOpenSearch: (state, action) => {
      state.isOpenSearch = action.payload
    }
  }
})

const toggleReducer = toggleSlice.reducer
export default toggleReducer
export const { setIsOpenMenu, setIsOpenSearch } = toggleSlice.actions

import { configureStore } from "@reduxjs/toolkit"
import loginReducer from "./slices/login.slice"
import toggleReducer from "./slices/toggle.slice"

export const createStore = () => {
  return configureStore({
    reducer: {
      login: loginReducer,
      toggle: toggleReducer
    }
  })
}

export type AppStore = ReturnType<typeof createStore>
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]
import { AppDispatch, AppStore, RootState } from "@/store/store"
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from "react-redux"

export const useAppStore = () => useStore() as AppStore
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
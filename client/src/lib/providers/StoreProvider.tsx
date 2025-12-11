"use client"

import { createStore } from "@/store/store"
import { useState } from "react"
import { Provider } from "react-redux"

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  const [store] = useState(() => createStore())

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

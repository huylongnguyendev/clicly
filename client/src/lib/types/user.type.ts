import { ElementType } from "react"

export enum Role {
  CUSTOMER = "CUSTOMER",
  ADMIN = "ADMIN",
  STAFF = "STAFF"
}

export interface User {
  fullName: string | null
  phone: string
  email: string | null
  address: string | null
  status: boolean
  role: Role
}

export interface UserActionType {
  title: string
  url: string
  icon: ElementType
}
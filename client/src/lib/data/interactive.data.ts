import { LogIn, PackageSearch, Settings, UserRoundPen, UserRoundSearchIcon } from "lucide-react"
import { UserActionType } from "../types/user.type"

export const UserLoggedAction: UserActionType[] = [
  {
    title: "Profile của tôi",
    url: "/profile",
    icon: UserRoundSearchIcon
  },
  {
    title: "Đơn hàng",
    url: "/orders",
    icon: PackageSearch
  },
  {
    title: "Cài đặt",
    url: "/settings",
    icon: Settings
  },
]

export const UserOutAction: UserActionType[] = [
  {
    title: "Đăng ký",
    url: "/register",
    icon: UserRoundPen
  },
  {
    title: "Đăng nhập",
    url: "/login",
    icon: LogIn
  },
]
import CartAction from "./CartAction"
import UserAction from "./user/UserAction"

export default function Interactive() {
  return (
    <>
      <div className="space-x-2">
        <CartAction />
        <UserAction />
      </div>
    </>
  )
}

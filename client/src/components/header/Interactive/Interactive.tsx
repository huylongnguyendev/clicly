import CartAction from "./CartAction"
import SearchAction from "./search/SearchAction"
import UserAction from "./user/UserAction"

export default function Interactive() {
  return (
    <>
      <div className="space-x-2">
        <SearchAction />
        <CartAction />
        <UserAction />
      </div>
    </>
  )
}

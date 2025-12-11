import Logo from "../Logo"
import Interactive from "./Interactive/Interactive"
import MenuAction from "./MenuAction"
import NavBar from "./navigation/NavBar"
import NavSide from "./navigation/NavSide"

export default function Header() {
  return (
    <>
      <header className="fixed top-0 left-1/2 -translate-x-1/2 px-4 py-2 w-full max-w-6xl z-50">
        <nav className="flex justify-between items-center">
          <MenuAction />
          <Logo className="text-2xl!" />
          <NavBar />
          <NavSide />
          <Interactive />
        </nav>
      </header>
    </>
  )
}

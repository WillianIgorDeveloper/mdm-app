import { ROUTES } from "@/utils/routes"
import { Link, NavLink } from "react-router-dom"
import { Button } from "../../ui/button"
import { ChevronsRightIcon } from "lucide-react"

export function Navbar() {
  return (
    <>
      <header className="w-full fixed top-0 left-0">
        <div className="container p-3 flex items-center justify-between lg:p-5">
          <Link to={ROUTES.HOME}>
            <h1 className="font-serif text-2xl font-bold">MDM</h1>
          </Link>
          <nav className="flex gap-6">
            <NavLink
              to={ROUTES.INITIATIVE}
              className={({ isActive }) => (isActive ? "bg-card rounded-lg" : "")}
            >
              <Button variant="link" className="text-md">
                Iniciativa
              </Button>
            </NavLink>
            <NavLink
              to={ROUTES.DUNGEON_GENERATOR}
              className={({ isActive }) => (isActive ? "bg-card rounded-lg" : "")}
            >
              <Button variant="link" className="text-md">
                Gerador de dungeon
              </Button>
            </NavLink>
            <Link to={ROUTES.LOGIN}>
              <Button className="text-md gap-3">
                Login <ChevronsRightIcon />
              </Button>
            </Link>
          </nav>
        </div>
      </header>
      <div className="py-10" />
    </>
  )
}

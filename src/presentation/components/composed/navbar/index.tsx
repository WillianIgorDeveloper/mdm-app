// ==== Imports ====
// Externals
import { Link, NavLink } from "react-router-dom"
import { ChevronsRightIcon, MenuIcon } from "lucide-react"
// Utils
import { ROUTES } from "@/utils/routes"
// Components
import { Button } from "@/presentation/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/presentation/components/ui/sheet"

// ==== Component ====
export function Navbar() {
  // Return
  return (
    <>
      <header className="w-full fixed top-0 left-0 bg-background">
        <div className="container p-3 flex items-center justify-between sm:p-6 lg:p-5">
          <Link to={ROUTES.HOME}>
            <h1 className="font-serif text-2xl font-bold">MDM</h1>
          </Link>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <MenuIcon />
              </SheetTrigger>
              <SheetContent side="top">
                <nav className="flex flex-col gap-6">
                  <SheetTrigger asChild className="text-center">
                    <Link to={ROUTES.HOME}>
                      <h1 className="font-serif text-2xl font-bold">MDM</h1>
                    </Link>
                  </SheetTrigger>
                  <SheetTrigger asChild>
                    <NavLink
                      to={ROUTES.INITIATIVE}
                      className={({ isActive }) =>
                        isActive ? "bg-card rounded-lg" : ""
                      }
                    >
                      <Button variant="link" className="text-md">
                        Iniciativa
                      </Button>
                    </NavLink>
                  </SheetTrigger>
                  <SheetTrigger asChild>
                    <NavLink
                      to={ROUTES.DUNGEON_GENERATOR}
                      className={({ isActive }) =>
                        isActive ? "bg-card rounded-lg" : ""
                      }
                    >
                      <Button variant="link" className="text-md">
                        Gerador de dungeon
                      </Button>
                    </NavLink>
                  </SheetTrigger>
                  <SheetTrigger asChild>
                    <Link to={ROUTES.LOGIN} className="w-full">
                      <Button className="text-md gap-3 w-full justify-between">
                        Login <ChevronsRightIcon />
                      </Button>
                    </Link>
                  </SheetTrigger>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop menu */}
          <nav className="gap-6 hidden md:flex">
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
      <div className="py-7 md:py-10" />
    </>
  )
}

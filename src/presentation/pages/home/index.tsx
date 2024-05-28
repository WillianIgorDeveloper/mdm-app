import { Button } from "@/presentation/components/ui/button"
import { ROUTES } from "@/utils/routes"
import { Link } from "react-router-dom"

export function HomePage() {
  return (
    <div>
      <header>
        <nav className="flex">
          <Link to={ROUTES.INITIATIVE}>
            <Button variant="link">Iniciativa</Button>
          </Link>
          <Link to={ROUTES.DUNGEON_GENERATOR}>
            <Button variant="link">Gerador de dungeon</Button>
          </Link>
          <Link to={ROUTES.LOGIN}>
            <Button variant="link">Login</Button>
          </Link>
        </nav>
      </header>
      <div className="py-20 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-black">MDM</h1>
      </div>
    </div>
  )
}

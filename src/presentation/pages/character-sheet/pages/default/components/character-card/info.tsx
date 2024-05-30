import { Button } from "@/presentation/components/ui/button"
import { ROUTES } from "@/utils/routes"
import { Link } from "react-router-dom"

export function Info() {
  return (
    <>
      <Link to={ROUTES.CHARACTER_SHEET_CREATION}>
        <Button>Editar</Button>
      </Link>
    </>
  )
}

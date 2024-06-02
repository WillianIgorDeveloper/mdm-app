import { ROUTES } from "@/utils/routes"
import { Navigate, Outlet, useParams } from "react-router-dom"
import { useCharacterSheetContext } from "./context"

export function CharacterSheetActionMiddleware() {
  const { id } = useParams()
  const { checkIfCharacterExists } = useCharacterSheetContext()
  return checkIfCharacterExists(id ?? "") ? (
    <Outlet />
  ) : (
    <Navigate to={ROUTES.CHARACTER_SHEET} replace={true} />
  )
}

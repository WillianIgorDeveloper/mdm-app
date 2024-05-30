// ==== Imports ====
// Externals
import { Link } from "react-router-dom"
import { CircleAlertIcon, FilePlus2Icon } from "lucide-react"
// Utils
import { ROUTES } from "@/utils/routes"
// Components
import { CharacterCard } from "./components/character-card"
import { Button } from "@/presentation/components/ui/button"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/presentation/components/ui/alert"

// ==== Component ====
export function CharacterSheetDefaultPage() {
  // Return
  return (
    <div className="flex flex-col gap-3 container p-3">
      <Link to={ROUTES.CHARACTER_SHEET_CREATION} className="ml-auto">
        <Button className="gap-3">
          <FilePlus2Icon /> Criar
        </Button>
      </Link>

      <Alert>
        <AlertTitle className="flex gap-3 items-center">
          <CircleAlertIcon /> Sessão não iniciada!
        </AlertTitle>
        <AlertDescription>
          Suas fichas de personagem serão salvas localmente e não estarão disponíveis
          em outros dispositivos. Para salvar suas fichas na nuvem, faça login.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        <CharacterCard />
      </div>
    </div>
  )
}

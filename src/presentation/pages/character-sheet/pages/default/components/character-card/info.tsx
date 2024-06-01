import { Button } from "@/presentation/components/ui/button"
import { DialogTrigger } from "@/presentation/components/ui/dialog"
import { useCharacterSheetContext } from "@/presentation/pages/character-sheet/context"
import { ROUTES } from "@/utils/routes"
import { Link } from "react-router-dom"

export function Info({ character }: { character: any }) {
  const { handleDeleteCharacter } = useCharacterSheetContext()
  return (
    <>
      <Link to={ROUTES.CHARACTER_SHEET_CREATION}>
        <Button>Editar</Button>
      </Link>
      <DialogTrigger asChild>
        <Button
          variant="destructive"
          onClick={() => handleDeleteCharacter({ character })}
        >
          Delete
        </Button>
      </DialogTrigger>
    </>
  )
}

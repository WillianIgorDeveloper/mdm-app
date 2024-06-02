import { Button } from "@/presentation/components/ui/button"
import { DialogTrigger } from "@/presentation/components/ui/dialog"
import { useCharacterSheetContext } from "@/presentation/pages/character-sheet/context"
import { classes, races } from "@/utils/consts"

export function Info({ character }: { character: any }) {
  // Hooks
  const { handleDeleteCharacter } = useCharacterSheetContext()

  // Functions
  function getRaceName() {
    return races.find((r) => r.id === character.race)?.name
  }

  function getClassName() {
    return classes.find((c) => c.id === character.class)?.name
  }

  // Return
  return (
    <div className="flex flex-col gap-3 pt-4">
      <div className="ml-auto space-x-3">
        <Button disabled>Editar</Button>
        <DialogTrigger asChild>
          <Button
            variant="destructive"
            onClick={() => handleDeleteCharacter({ character })}
          >
            Delete
          </Button>
        </DialogTrigger>
      </div>

      <div className="space-y-3">
        <h1 className="text-xl">{character.name}</h1>
        <p>Raça: {getRaceName()}</p>
        <p>Classe: {getClassName()}</p>
      </div>
    </div>
  )
}

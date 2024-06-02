//==== Imports ====//
// External
import { Link } from "react-router-dom"
// Hooks
import { useCharacterSheetContext } from "@/presentation/pages/character-sheet/context"
// Types
import type { Character } from "@/utils/entity"
// Utils
import { ROUTES } from "@/utils/routes"
import { classes, races, books, alignments, antecedents } from "@/utils/const"
// Components
import { Button } from "@/presentation/components/ui/button"
import { DialogTrigger } from "@/presentation/components/ui/dialog"

//==== Component ====//
export function Info({ character }: { character: Character }) {
  // Hooks
  const { handleDeleteCharacter } = useCharacterSheetContext()

  // Functions
  function getRaceName() {
    return races.find((race) => race.id === character.race)?.name
  }

  function getClassName() {
    return classes.find((classe) => classe.id === character.class)?.name
  }

  function getBooks() {
    return character.books
      .map((bookId: string) => {
        const book = books.find((b) => b.id === bookId)
        return book?.name
      })
      .join(", ")
  }

  function getAlignment() {
    return alignments.find((alignment) => alignment.id === character.alignment)?.name
  }

  function getAntecedentName() {
    return antecedents.find((antecedent) => antecedent.id === character.antecedent)
      ?.name
  }

  // Return
  return (
    <div className="flex flex-col gap-3 pt-4">
      <div className="ml-auto space-x-3">
        <Link to={`${ROUTES.CHARACTER_SHEET}/${character.id}`}>
          <Button>Visualizar</Button>
        </Link>
        <Link to={`${ROUTES.CHARACTER_SHEET_EDIT}/${character.id}`}>
          <Button>Editar</Button>
        </Link>
        <Link to={`${ROUTES.CHARACTER_SHEET_UP}/${character.id}`}>
          <Button>Subir nível</Button>
        </Link>
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
        <p>Alinhamento: {getAlignment()}</p>
        <p>Livros: {getBooks()}</p>
        <p>Antecedente: {getAntecedentName()}</p>
        <p>Raça: {getRaceName()}</p>
        <p>Classe: {getClassName()}</p>
        <p>Proficiência: {character.proficiency}</p>
        <div>
          <p>Pontos de habilidade:</p>
          <p>Força: {character.strength}</p>
          <p>Destreza: {character.dexterity}</p>
          <p>Constituição: {character.constitution}</p>
          <p>Inteligência: {character.intelligence}</p>
          <p>Sabedoria: {character.wisdom}</p>
          <p>Carisma: {character.charisma}</p>
        </div>
      </div>
    </div>
  )
}

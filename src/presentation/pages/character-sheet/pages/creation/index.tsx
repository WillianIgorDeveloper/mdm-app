// ==== Imports ====
// Hooks
import { useState } from "react"
// Components
import { Button } from "@/presentation/components/ui/button"
import { Class } from "./components/class"
import { Info } from "./components/info"
import { Race } from "./components/race"
import { CopyXIcon, SaveAllIcon } from "lucide-react"
import { initialStateNewCharacterSheet } from "./const/initial-state-new-character-sheet"

// ==== Component ====
export function CharacterSheetCreationPage() {
  // States
  const [newCharacterSheet, setNewCharacterSheet] = useState(
    initialStateNewCharacterSheet,
  )

  // Return
  return (
    <div className="p-3">
      <div className="flex flex-col gap-3 lg:flex-row">
        <Info />
        <Class />
        <Race />
      </div>
      <div className="w-full flex justify-end gap-3 my-3">
        <Button className="gap-3 bg-destructive">
          <CopyXIcon /> Cancelar
        </Button>
        <Button className="gap-3 bg-success">
          <SaveAllIcon /> Salvar
        </Button>
      </div>
    </div>
  )
}

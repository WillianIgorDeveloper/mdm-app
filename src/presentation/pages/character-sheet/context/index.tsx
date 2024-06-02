// ==== Imports ====
// Externals
import { createContext } from "react"
// Hooks
import { useContext, useEffect, useState } from "react"
// Utils
import { availableSkillPoints } from "@/utils/const"
// Types
import type {
  Character,
  CharacterSheetContextType,
  CharacterSheetProviderType,
} from "./types"
import type { z } from "zod"
import type { formSchema } from "../pages/creation/schemas"
import { useNavigate } from "react-router-dom"
import { ROUTES } from "@/utils/routes"

// ==== Context ====
const CharacterSheetContext = createContext<CharacterSheetContextType | null>(null)

// ==== Provider ====
export function CharacterSheetProvider({ children }: CharacterSheetProviderType) {
  const navigate = useNavigate()

  // states
  const [characters, setCharacters] = useState<Character[]>([])
  const [skillPointsAvailable, setSkillPointsAvailable] =
    useState(availableSkillPoints)
  const [skillPoints, setSkillPoints] = useState({
    strength: "",
    dexterity: "",
    constitution: "",
    intelligence: "",
    wisdom: "",
    charisma: "",
  })

  // Handlers
  function handleDeleteCharacter({ character }: { character: any }) {
    setCharacters((characters) =>
      characters.filter((char) => char.id !== character.id),
    )

    localStorage.setItem(
      "characters",
      JSON.stringify(characters.filter((char) => char.id !== character.id)),
    )
  }

  function handleClickSkillPoint({
    point,
    type,
  }: { point: string; type: keyof typeof skillPoints }) {
    if (skillPoints[type] === point) {
      setSkillPoints({ ...skillPoints, [type]: "" })
      setSkillPointsAvailable([...skillPointsAvailable, point])
      return
    }

    if (skillPoints[type] === "" && skillPointsAvailable.includes(point)) {
      setSkillPoints({ ...skillPoints, [type]: point })
      setSkillPointsAvailable(skillPointsAvailable.filter((p) => p !== point))
      return
    }

    if (skillPoints[type] !== "" && skillPointsAvailable.includes(point)) {
      setSkillPoints({ ...skillPoints, [type]: point })
      setSkillPointsAvailable([
        ...skillPointsAvailable.filter((p) => p !== point),
        skillPoints[type],
      ])
      return
    }
  }

  function handleSubmit(values: z.infer<typeof formSchema>) {
    // Check skill points
    if (skillPointsAvailable.length > 0) return
    // Save character sheet on local storage
    characters.push({ ...values, ...skillPoints })
    localStorage.setItem("characters", JSON.stringify(characters))
    // Redirect to character sheet
    navigate(ROUTES.CHARACTER_SHEET)
  }

  // Functions
  function checkIfCharacterExists(id: string) {
    return characters.some((character) => character.id === id)
  }

  // Effects
  useEffect(() => {
    // Load character data from local storage
    const characters = localStorage.getItem("characters")
    if (characters) setCharacters(JSON.parse(characters))
  }, [])

  // Return
  return (
    <CharacterSheetContext.Provider
      value={{
        // States
        characters,
        skillPointsAvailable,
        skillPoints,
        // Handlers
        handleDeleteCharacter,
        handleClickSkillPoint,
        handleSubmit,
        // Functions
        checkIfCharacterExists,
      }}
    >
      {children}
    </CharacterSheetContext.Provider>
  )
}

export function useCharacterSheetContext() {
  const context = useContext(CharacterSheetContext)
  if (!context)
    throw new Error(
      "useCharacterSheetContext must be used within a CharacterSheetProvider",
    )
  return context
}

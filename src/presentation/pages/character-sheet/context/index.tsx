// ==== Imports ====
// Externals
import { createContext } from "react"
// Hooks
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
// Utils
import { initialAvailableSkillPoints, initialSkillPoints } from "./const"
import { ROUTES } from "@/utils/routes"
// Types
import type { z } from "zod"
import type { formSchema } from "../pages/creation/schemas"
import type {
  Character,
  CharacterSheetContextType,
  CharacterSheetProviderType,
  SkillPointsKeysType,
} from "./types"

// ==== Context ====
const CharacterSheetContext = createContext<CharacterSheetContextType | null>(null)

// ==== Provider ====
export function CharacterSheetProvider({ children }: CharacterSheetProviderType) {
  // Hooks
  const navigate = useNavigate()

  // states
  const [characters, setCharacters] = useState<Character[]>([])
  const [skillPoints, setSkillPoints] = useState(initialSkillPoints)
  const [skillPointsAvailable, setSkillPointsAvailable] = useState(
    initialAvailableSkillPoints,
  )

  // Handlers
  function handleDeleteCharacter({ character }: { character: Character }) {
    // Remove character from the list
    setCharacters((characters) =>
      characters.filter((char) => char.id !== character.id),
    )
    // Remove character from local storage
    localStorage.setItem(
      "characters",
      JSON.stringify(characters.filter((char) => char.id !== character.id)),
    )
  }

  function handleClickSkillPoint({
    point,
    type,
  }: { point: string; type: SkillPointsKeysType }) {
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

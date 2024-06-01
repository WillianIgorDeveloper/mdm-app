import { createContext, useContext, useEffect, useState } from "react"

// ==== Types ====
type CharacterSheetContextType = {
  // states
  characters: any[]
  // Handlers
  handleDeleteCharacter: ({ character }: { character: any }) => void
  // Functions
  checkCharacterExists: (id: string) => boolean
}

type CharacterSheetProviderType = {
  children: React.ReactNode
}

// ==== Context ====
const CharacterSheetContext = createContext<CharacterSheetContextType | undefined>(
  undefined,
)

// ==== Provider ====
export function CharacterSheetProvider({ children }: CharacterSheetProviderType) {
  // states
  const [characters, setCharacters] = useState<any[]>([])

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

  // Functions
  function checkCharacterExists(id: string) {
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
        // Handlers
        handleDeleteCharacter,
        // Functions
        checkCharacterExists,
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

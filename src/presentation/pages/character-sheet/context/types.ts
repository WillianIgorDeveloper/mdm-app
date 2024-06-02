import type { z } from "zod"
import type { formSchema } from "../pages/creation/schemas"

export type CharacterSheetProviderType = {
  children: React.ReactNode
}

export type CharacterSheetContextType = {
  // states
  characters: Character[]
  skillPointsAvailable: string[]
  skillPoints: SkillPointsType
  // Handlers
  handleDeleteCharacter: ({ character }: { character: Character }) => void
  handleClickSkillPoint: (props: {
    point: string
    type: keyof SkillPointsType
  }) => void
  handleSubmit: (values: z.infer<typeof formSchema>) => void
  // Functions
  checkIfCharacterExists: (id: string) => boolean
}

export type Character = {
  id: string
  name: string
  level: number
  alignment: string
  books: string[]
  class: string
  race: string
  proficiency: number
  strength: string
  dexterity: string
  constitution: string
  intelligence: string
  wisdom: string
  charisma: string
}

export type SkillPointsType = {
  strength: string
  dexterity: string
  constitution: string
  intelligence: string
  wisdom: string
  charisma: string
}

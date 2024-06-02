import type { z } from "zod"
import type { formSchema } from "../pages/creation/schemas"
import type { Character } from "@/utils/entity"

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
    type: SkillPointsKeysType
  }) => void
  handleSubmit: (values: z.infer<typeof formSchema>) => void
  // Functions
  checkIfCharacterExists: (id: string) => boolean
}

export type SkillPointsType = {
  strength: string
  dexterity: string
  constitution: string
  intelligence: string
  wisdom: string
  charisma: string
}

export type SkillPointsKeysType = keyof SkillPointsType

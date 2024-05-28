export type Dungeon = {
  id: number
  name: string
  exits: number
  trap?: null | { id: number; name: string; description: string }
  danger?: null | { id: number; name: string; description: string }
  encounter?: null | { id: number; name: string; description: string }
  chest?: null | {
    id: number
    name: string
    description: string
    trap?: null | { id: number; name: string; description: string }
  }
}[]

export type Dungeon = {
  id: string
  name: string
  exits: number
  trap?: null | { id: string; name: string }
  danger?: null | { id: string; name: string }
  encounter?: null | { id: string; name: string }
  chest?: null | {
    id: string
    name: string
    trap?: null | { id: string; name: string }
  }
}[]

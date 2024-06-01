import { Card } from "./card"
import { Info } from "./info"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/presentation/components/ui/dialog"

export function CharacterCard({ character }: { character: any }) {
  return (
    <Dialog>
      <DialogTrigger>
        <Card character={character} />
      </DialogTrigger>
      <DialogContent>
        <Info character={character} />
      </DialogContent>
    </Dialog>
  )
}

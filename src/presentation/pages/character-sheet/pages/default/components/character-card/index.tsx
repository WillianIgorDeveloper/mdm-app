import { Card } from "./card"
import { Info } from "./info"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/presentation/components/ui/dialog"

export function CharacterCard() {
  return (
    <Dialog>
      <DialogTrigger>
        <Card />
      </DialogTrigger>
      <DialogContent>
        <Info />
      </DialogContent>
    </Dialog>
  )
}

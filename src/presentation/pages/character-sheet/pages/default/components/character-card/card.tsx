import { Badge } from "@/presentation/components/ui/badge"
import { Card as CardUI, CardContent } from "@/presentation/components/ui/card"
import { User2Icon } from "lucide-react"

export function Card() {
  return (
    <CardUI>
      <CardContent className="p-3">
        <div className="flex gap-6 items-center">
          <User2Icon size={30} />
          <div className="flex flex-col gap-2">
            <h2>Nome de personagem</h2>
            <div className="space-x-2">
              <Badge variant="outline">Classe</Badge>
              <Badge variant="outline">Raça</Badge>
              <Badge variant="outline">Nível</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </CardUI>
  )
}

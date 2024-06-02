// ==== Imports ====
// Externals
import { User2Icon } from "lucide-react"
// Utils
import { classes, races } from "@/utils/consts"
// Components
import { Badge } from "@/presentation/components/ui/badge"
import { Card as CardUI, CardContent } from "@/presentation/components/ui/card"

// ==== Component ====
export function Card({ character }: { character: any }) {
  // Functions
  function getCharacterClassDescription() {
    return classes.find((c) => c.id === character.class)?.name
  }

  function getCharacterRaceDescription() {
    return races.find((r) => r.id === character.race)?.name
  }

  // Return
  return (
    <CardUI>
      <CardContent className="p-3">
        <div className="flex gap-6 items-center">
          <User2Icon size={30} />
          <div className="flex flex-col gap-2">
            <h2 className="text-left">{character.name}</h2>
            <div className="space-x-2">
              <Badge variant="outline">{getCharacterClassDescription()}</Badge>
              <Badge variant="outline">{getCharacterRaceDescription()}</Badge>
              <Badge variant="outline">Nível</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </CardUI>
  )
}

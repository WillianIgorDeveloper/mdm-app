import { useState } from "react"
import { dungeonGenerator } from "@/utils/dungeon-generator"
import { Button } from "@/presentation/components/ui/button"
import type { Dungeon } from "@/utils/entities"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/presentation/components/ui/card"

export function DungeonGeneratorPage() {
  const [dungeon, setDungeon] = useState<Dungeon>([])

  function handleGenerateDungeon() {
    const dungeon = dungeonGenerator()
    console.log(dungeon)
    setDungeon(dungeon)
  }

  return (
    <div className="p-3 container space-y-3 bg-">
      <Button onClick={handleGenerateDungeon}>Gerar dungeon</Button>

      <Card>
        <CardHeader>
          <CardTitle>Masmorra</CardTitle>
          <CardDescription>{dungeon.length} salas geradas</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {dungeon?.map((piece, index) => (
              <li key={index} className="p-2 border rounded">
                <p>
                  {piece.name} {piece.id}
                </p>
                {piece.trap && (
                  <p>
                    Armadilha: {piece.trap.name} - {piece.trap.description}
                  </p>
                )}
                {piece.danger && (
                  <p>
                    Perigo: {piece.danger.name} - {piece.danger.description}
                  </p>
                )}
                {piece.encounter && (
                  <p>
                    Encontro: {piece.encounter.name} - {piece.encounter.description}
                  </p>
                )}
                {piece.chest && (
                  <div>
                    <p>
                      Baú: {piece.chest.name} - {piece.chest.description}
                    </p>
                    {piece.chest.trap && (
                      <p>
                        Armadilha: {piece.chest.trap.name} -{" "}
                        {piece.chest.trap.description}
                      </p>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

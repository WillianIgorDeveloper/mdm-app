import { useState } from "react"
import { dungeonGenerator } from "@/utils/function/dungeon-generator"
import { Button } from "@/presentation/components/ui/button"
import type { Dungeon } from "@/utils/entity"
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
                {piece.trap && <p>Armadilha: {piece.trap.name}</p>}
                {piece.danger && <p>Perigo: {piece.danger.name}</p>}
                {piece.encounter && <p>Encontro: {piece.encounter.name}</p>}
                {piece.chest && (
                  <div>
                    <p>Baú: {piece.chest.name}</p>
                    {piece.chest.trap && <p>Armadilha: {piece.chest.trap.name}</p>}
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

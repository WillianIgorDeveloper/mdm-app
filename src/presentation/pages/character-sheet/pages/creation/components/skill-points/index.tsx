// ==== Imports ====
// Components
import { Card, CardContent, CardTitle } from "@/presentation/components/ui/card"
import { SkillPoint } from "./avaliable-skill-points"
import { Separator } from "@/presentation/components/ui/separator"
import { useCharacterSheetContext } from "@/presentation/pages/character-sheet/context"

// ==== Component ====
export function SkillPoints() {
  // Hooks
  const { skillPoints } = useCharacterSheetContext()

  // Return
  return (
    <Card className="flex-1 py-3 animate-fade-left">
      <CardTitle className="text-center">Pontos de Habilidade</CardTitle>
      <CardContent>
        <div className="flex justify-between py-3">
          <p className="font-semibold">Proficiência: +2</p>
          <p className="font-semibold">Bônus</p>
        </div>

        <div className="space-y-3">
          <SkillPoint
            title="Força"
            type="strength"
            skillPoint={skillPoints.strength}
          />

          <Separator />

          <SkillPoint
            title="Destreza"
            type="dexterity"
            skillPoint={skillPoints.dexterity}
          />

          <Separator />

          <SkillPoint
            title="Constituição"
            type="constitution"
            skillPoint={skillPoints.constitution}
          />

          <Separator />

          <SkillPoint
            title="Inteligência"
            type="intelligence"
            skillPoint={skillPoints.intelligence}
          />

          <Separator />

          <SkillPoint
            title="Sabedoria"
            type="wisdom"
            skillPoint={skillPoints.wisdom}
          />

          <Separator />

          <SkillPoint
            title="Carisma"
            type="charisma"
            skillPoint={skillPoints.charisma}
          />
        </div>
      </CardContent>
    </Card>
  )
}

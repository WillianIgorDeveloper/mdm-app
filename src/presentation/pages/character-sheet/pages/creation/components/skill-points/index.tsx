// ==== Imports ====
// Types
import type { FormType } from "../../types"
// Utils
import { avaliableSkillPoints } from "./const"
// Hooks
import { useState } from "react"
// Components
import { Card, CardContent, CardTitle } from "@/presentation/components/ui/card"
import { SkillPoint } from "./avaliable-skill-points"
import { Separator } from "@/presentation/components/ui/separator"

// ==== Component ====
export function SkillPoints({ form }: { form: FormType }) {
  console.log(form)
  // States
  const [skillPointsAvailable, setSkillPointsAvailable] =
    useState(avaliableSkillPoints)
  const [skillPoints, setSkillPoints] = useState<any>({
    strength: "",
    dexterity: "",
    constitution: "",
    intelligence: "",
    wisdom: "",
    charisma: "",
  })

  // Functions
  function handleClickSkillPoint({ point, type }: { point: string; type: string }) {
    if (skillPoints[type] === point) {
      setSkillPoints({ ...skillPoints, [type]: "" })
      setSkillPointsAvailable([...skillPointsAvailable, point])
      return
    }

    if (skillPoints[type] === "" && skillPointsAvailable.includes(point)) {
      setSkillPoints({ ...skillPoints, [type]: point })
      setSkillPointsAvailable(skillPointsAvailable.filter((p) => p !== point))
      return
    }

    if (skillPoints[type] !== "" && skillPointsAvailable.includes(point)) {
      setSkillPoints({ ...skillPoints, [type]: point })
      setSkillPointsAvailable([
        ...skillPointsAvailable.filter((p) => p !== point),
        skillPoints[type],
      ])
      return
    }
  }

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
            skillPointsAvailable={skillPointsAvailable}
            skillPoint={skillPoints.strength}
            handleClickSkillPoint={handleClickSkillPoint}
          />

          <Separator />

          <SkillPoint
            title="Destreza"
            type="dexterity"
            skillPointsAvailable={skillPointsAvailable}
            skillPoint={skillPoints.dexterity}
            handleClickSkillPoint={handleClickSkillPoint}
          />

          <Separator />

          <SkillPoint
            title="Constituição"
            type="constitution"
            skillPointsAvailable={skillPointsAvailable}
            skillPoint={skillPoints.constitution}
            handleClickSkillPoint={handleClickSkillPoint}
          />

          <Separator />

          <SkillPoint
            title="Inteligência"
            type="intelligence"
            skillPointsAvailable={skillPointsAvailable}
            skillPoint={skillPoints.intelligence}
            handleClickSkillPoint={handleClickSkillPoint}
          />

          <Separator />

          <SkillPoint
            title="Sabedoria"
            type="wisdom"
            skillPointsAvailable={skillPointsAvailable}
            skillPoint={skillPoints.wisdom}
            handleClickSkillPoint={handleClickSkillPoint}
          />

          <Separator />

          <SkillPoint
            title="Carisma"
            type="charisma"
            skillPointsAvailable={skillPointsAvailable}
            skillPoint={skillPoints.charisma}
            handleClickSkillPoint={handleClickSkillPoint}
          />
        </div>
      </CardContent>
    </Card>
  )
}

// ==== Imports ====
// Components
import { Badge } from "@/presentation/components/ui/badge"

// Type
type SkillPointType = {
  title: string
  type: string
  skillPointsAvailable: string[]
  skillPoint: any
  handleClickSkillPoint: (props: { point: string; type: string }) => void
}

// ==== Component ====
export function SkillPoint(props: SkillPointType) {
  // Functions
  function getSkillPointState(skillPoint: string) {
    if (props.skillPointsAvailable.includes(skillPoint)) return "secondary"
    if (props.skillPoint === skillPoint) return "default"
    return "outline"
  }

  // Return
  return (
    <div className="space-y-3">
      <span>{props.title}</span>
      <div className="flex gap-3">
        <Badge
          variant={getSkillPointState("8")}
          className="text-base cursor-pointer"
          onClick={() =>
            props.handleClickSkillPoint({ point: "8", type: props.type })
          }
        >
          8
        </Badge>
        <Badge
          variant={getSkillPointState("10")}
          className="text-base cursor-pointer"
          onClick={() =>
            props.handleClickSkillPoint({ point: "10", type: props.type })
          }
        >
          10
        </Badge>
        <Badge
          variant={getSkillPointState("12")}
          className="text-base cursor-pointer"
          onClick={() =>
            props.handleClickSkillPoint({ point: "12", type: props.type })
          }
        >
          12
        </Badge>
        <Badge
          variant={getSkillPointState("13")}
          className="text-base cursor-pointer"
          onClick={() =>
            props.handleClickSkillPoint({ point: "13", type: props.type })
          }
        >
          13
        </Badge>
        <Badge
          variant={getSkillPointState("14")}
          className="text-base cursor-pointer"
          onClick={() =>
            props.handleClickSkillPoint({ point: "14", type: props.type })
          }
        >
          14
        </Badge>
        <Badge
          variant={getSkillPointState("15")}
          className="text-base cursor-pointer"
          onClick={() =>
            props.handleClickSkillPoint({ point: "15", type: props.type })
          }
        >
          15
        </Badge>

        <div className="flex-1" />

        <Badge variant="outline" className="text-base cursor-pointer">
          +2
        </Badge>

        <Badge variant="outline" className="text-base cursor-pointer">
          +1
        </Badge>
      </div>
    </div>
  )
}

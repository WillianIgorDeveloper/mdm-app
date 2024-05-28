// ==== Imports ====
// Externals
import {
  ArrowBigLeftDashIcon,
  ArrowBigRightDashIcon,
  ArrowDownWideNarrow,
  RefreshCcwIcon,
  SkullIcon,
  Trash2Icon,
  User2Icon,
} from "lucide-react"
// Hooks
import { useInitiativeContext } from "../../context"
// Components
import { Button } from "@/presentation/components/ui/button"
import { InitiativeCard } from "../../components/initiative-card"

// ==== Component ====
export function InitiativePageDefault() {
  // Hooks
  const context = useInitiativeContext()

  // Return
  return (
    <div className="flex flex-col items-center gap-6 p-3 py-6">
      <h1 className="text-xl font-bold">Iniciativa</h1>
      <div className="flex gap-3 items-center justify-between w-full">
        <h2 className="text-lg font-semibold">
          {context.round !== -1 && `Rodada ${context.round}`}
        </h2>
        {context.round === -1 ? (
          <Button
            onClick={context.handleStartCombat}
            disabled={context.initiativeCards.length <= 1}
          >
            Iniciar combate
          </Button>
        ) : (
          <div className="space-x-3">
            <Button onClick={context.handleStartCombat} size="icon">
              <RefreshCcwIcon />
            </Button>
            <Button
              onClick={context.handlePrevTurn}
              size="icon"
              disabled={context.round === 1}
            >
              <ArrowBigLeftDashIcon />
            </Button>
            <Button onClick={context.handleNextTurn} size="icon">
              <ArrowBigRightDashIcon />
            </Button>
          </div>
        )}
      </div>

      {context?.initiativeCards.map((card) => (
        <InitiativeCard key={card.id} card={card} />
      ))}

      <div className="flex items-center gap-3">
        <Button onClick={context.handleAddPlayerCard} className="gap-3">
          <User2Icon />
        </Button>
        <Button onClick={context.handleAddEnemyCard} className="gap-3">
          <SkullIcon />
        </Button>
        <Button
          onClick={context.handleSort}
          className="gap-3"
          disabled={context.initiativeCards.length <= 1}
        >
          <ArrowDownWideNarrow />
        </Button>
        <Button
          onClick={context.handleClearCards}
          className="gap-3"
          disabled={context.initiativeCards.length === 0}
        >
          <Trash2Icon />
        </Button>
      </div>
    </div>
  )
}

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
import { Navbar } from "@/presentation/components/composed/navbar"

// ==== Component ====
export function InitiativePageDefault() {
  // Hooks
  const context = useInitiativeContext()

  // Return
  return (
    <div className="container flex flex-col gap-6 p-3 py-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">
          {context.round !== -1 && `Rodada ${context.round}`}
        </h2>
        <div className="flex items-center justify-end gap-3">
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
                disabled={context.round === 1 && context.currentTurn === 0}
              >
                <ArrowBigLeftDashIcon />
              </Button>
              <Button onClick={context.handleNextTurn} size="icon">
                <ArrowBigRightDashIcon />
              </Button>
            </div>
          )}
          <Button onClick={context.handleAddPlayerCard} className="gap-3">
            Adicionar Jogador <User2Icon />
          </Button>
          <Button onClick={context.handleAddEnemyCard} className="gap-3">
            Adicionar inimigo <SkullIcon />
          </Button>
          <Button
            onClick={context.handleSort}
            className="gap-3"
            disabled={context.initiativeCards.length <= 1}
          >
            Ordenar <ArrowDownWideNarrow />
          </Button>
          <Button
            onClick={context.handleClearCards}
            className="gap-3"
            disabled={context.initiativeCards.length === 0}
          >
            Limpar <Trash2Icon />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-3">
        {context?.initiativeCards.map((card, index) => (
          <InitiativeCard
            key={card.id}
            card={card}
            active={context.currentTurn === index}
          />
        ))}
      </div>
    </div>
  )
}

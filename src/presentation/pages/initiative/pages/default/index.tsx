// ==== Imports ====
// Externals
import {
  ArrowBigLeftDashIcon,
  ArrowBigRightDashIcon,
  ArrowDownWideNarrow,
  CircleSlashIcon,
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/presentation/components/ui/dropdown-menu"

// ==== Component ====
export function InitiativePageDefault() {
  // Hooks
  const context = useInitiativeContext()

  // Return
  return (
    <div className="container flex flex-col gap-6 p-3 py-6">
      <div className="flex flex-col">
        <div className="flex gap-3 justify-end items-center">
          {context.round === -1 ? (
            <Button
              onClick={context.handleStartCombat}
              disabled={context.initiativeCards.length <= 1}
            >
              Iniciar combate
            </Button>
          ) : (
            <>
              <Button onClick={context.handleStopCombat} size="icon">
                <CircleSlashIcon />
              </Button>
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
            </>
          )}

          {/* Mobile menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>Opções</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-2 rounded-lg space-y-2">
              <DropdownMenuItem>
                <Button
                  onClick={context.handleAddPlayerCard}
                  className="gap-3 w-full"
                >
                  Adicionar Jogador <User2Icon />
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button
                  onClick={context.handleAddEnemyCard}
                  className="gap-3 w-full"
                >
                  Adicionar inimigo <SkullIcon />
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button
                  onClick={context.handleSort}
                  className="gap-3 w-full"
                  disabled={context.initiativeCards.length <= 1}
                >
                  Ordenar <ArrowDownWideNarrow />
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button
                  onClick={context.handleClearCards}
                  className="gap-3 w-full"
                  disabled={context.initiativeCards.length === 0}
                >
                  Limpar <Trash2Icon />
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Desktop menu */}
        <div className="hidden items-center justify-end gap-3">
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

      <h2 className="text-lg font-semibold">
        {context.round !== -1 && `Rodada ${context.round}`}
      </h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
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

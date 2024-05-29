// ==== Imports ====
// Externals
import { SkullIcon, User2Icon, XIcon } from "lucide-react"
// Hooks
import { useInitiativeContext } from "../context"
// Entities
import type { InitiativeCardType } from "../entities"
// Utils
import { cn } from "@/utils/cn"
// Components
import { Input } from "@/presentation/components/ui/input"
import { Card } from "@/presentation/components/ui/card"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/presentation/components/ui/input-otp"

// ==== Component ====
export function InitiativeCard({
  card,
  active,
}: { card: InitiativeCardType; active: boolean }) {
  // Hooks
  const context = useInitiativeContext()

  // Return
  return (
    <Card
      className={cn(
        "w-full max-w-xs flex flex-col justify-center gap-2 p-3 relative",
        active && "ring-2 ring-purple ring-offset-green",
      )}
    >
      <XIcon
        size={28}
        className="absolute top-2 right-2"
        onClick={() => context.handleDeleteCard(card.id)}
      />
      <div className="flex gap-3 items-center">
        {card.type === "player" ? <User2Icon size={32} /> : <SkullIcon />}
        <InputOTP
          maxLength={2}
          value={card.value}
          onChange={(newValue) => {
            context.handleUpdateValue({ id: card.id, newValue })
          }}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} className="bg-card" />
            <InputOTPSlot index={1} className="bg-card" />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <Input
        className="text-center text-xl"
        value={card.name}
        onChange={(e) => {
          context.handleUpdateName({
            id: card.id,
            newName: e.target.value,
          })
        }}
      />
    </Card>
  )
}

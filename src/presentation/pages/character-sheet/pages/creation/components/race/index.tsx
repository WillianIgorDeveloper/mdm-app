// ==== Imports ====
// Types
import type { FormType } from "../../types"
// Components
import { Card, CardContent, CardTitle } from "@/presentation/components/ui/card"
import { RaceSelect } from "./race-select"

// ==== Component ====
export function Race({ form }: { form: FormType }) {
  // Return
  return (
    <Card className="flex-1 py-3 animate-fade-right">
      <CardTitle className="text-center">Raça</CardTitle>
      <CardContent>
        <RaceSelect form={form} />
      </CardContent>
    </Card>
  )
}

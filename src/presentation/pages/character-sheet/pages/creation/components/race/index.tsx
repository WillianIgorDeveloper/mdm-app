// ==== Imports ====
// Types
import type { FormType } from "../../types"
// Components
import { Card, CardContent, CardTitle } from "@/presentation/components/ui/card"

// ==== Component ====
export function Race({ form }: { form: FormType }) {
  // Return
  return (
    <Card className="flex-1 py-3">
      <CardTitle className="text-center">Raça</CardTitle>
      <CardContent />
    </Card>
  )
}

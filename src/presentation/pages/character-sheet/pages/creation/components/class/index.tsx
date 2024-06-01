// ==== Imports ====
// Types
import type { FormType } from "../../types"
// Components
import { Card, CardContent, CardTitle } from "@/presentation/components/ui/card"
import { ClassSelect } from "./class-select"

// ==== Component ====
export function Class({ form }: { form: FormType }) {
  // Return
  return (
    <Card className="flex-1 py-3 animate-fade-down">
      <CardTitle className="text-center">Classe</CardTitle>
      <CardContent>
        <ClassSelect form={form} />
      </CardContent>
    </Card>
  )
}

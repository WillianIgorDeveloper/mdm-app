//==== Imports ====//
// Types
import type { FormType } from "../../types"
// Components
import { Card, CardContent, CardTitle } from "@/presentation/components/ui/card"
import { AntecedentSelect } from "./antecedent-select"

//==== Component ====//
export function Antecedent({ form }: { form: FormType }) {
  // Return
  return (
    <Card className="flex-1 py-3 animate-fade-right">
      <CardTitle className="text-center">Antecedente</CardTitle>
      <CardContent>
        <AntecedentSelect form={form} />
      </CardContent>
    </Card>
  )
}

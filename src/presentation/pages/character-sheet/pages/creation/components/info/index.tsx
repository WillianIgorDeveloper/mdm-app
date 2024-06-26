// ==== Imports ====
// types
import type { FormType } from "../../types"
import { AlignmentSelect } from "./alignment-select"
// Components
import { BooksCheckbox } from "./books-checkbox"
import { NameInput } from "./name-input"
import { Card, CardContent, CardTitle } from "@/presentation/components/ui/card"

// ==== Component ====
export function Info({ form }: { form: FormType }) {
  // Return
  return (
    <Card className="flex-1 py-3 animate-fade-left">
      <CardTitle className="text-center py-2">Informações</CardTitle>
      <CardContent className="p-3 flex flex-col gap-3">
        <NameInput form={form} />
        <AlignmentSelect form={form} />
        <BooksCheckbox form={form} />
      </CardContent>
    </Card>
  )
}

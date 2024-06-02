// ==== Imports ====
// types
import type { FormType } from "../../types"
// Utils
import { antecedents } from "@/utils/const"
// Components
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/presentation/components/ui/form"
import {
  SelectItem,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/presentation/components/ui/select"

export function AntecedentSelect({ form }: { form: FormType }) {
  return (
    <FormField
      control={form.control}
      name="antecedent"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Antecedente</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Escolha sua Raça" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {antecedents.map((antecedent) => (
                <SelectItem key={antecedent.id} value={antecedent.id}>
                  {antecedent.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

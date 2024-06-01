// ==== Imports ====
// types
import type { FormType } from "../../types"
// Utils
import { alignments } from "../../const/alignments"
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

export function AlignmentSelect({ form }: { form: FormType }) {
  return (
    <FormField
      control={form.control}
      name="alignment"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Alinhamento</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Escolha seu Alinhamento" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {alignments.map((alignment) => (
                <SelectItem key={alignment.id} value={alignment.id}>
                  {alignment.name}
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

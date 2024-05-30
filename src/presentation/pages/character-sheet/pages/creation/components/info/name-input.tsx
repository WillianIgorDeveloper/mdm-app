// ==== Imports ====
// types
import type { FormType } from "../../types"
// Components
import { Input } from "@/presentation/components/ui/input"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/presentation/components/ui/form"

export function NameInput({ form }: { form: FormType }) {
  return (
    <FormField
      control={form.control}
      name="name"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="flex items-center justify-between">
            <p>Nome de personagem</p>
            <strong>Nível: 1</strong>
          </FormLabel>
          <FormControl>
            <Input placeholder="nome" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

// ==== Imports ====
// types
import type { FormType } from "../../types"
// Utils
import { classes } from "@/utils/const"
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

export function ClassSelect({ form }: { form: FormType }) {
  return (
    <FormField
      control={form.control}
      name="class"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Classe</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Escolha sua Classe" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {classes.map((classe) => (
                <SelectItem key={classe.id} value={classe.id}>
                  {classe.name}
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

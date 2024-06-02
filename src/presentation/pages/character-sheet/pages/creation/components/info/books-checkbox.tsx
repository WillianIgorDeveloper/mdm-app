// ==== Imports ====
// Types
import type { FormType } from "../../types"
// Utils
import { books } from "@/utils/const"
// Components
import { Checkbox } from "@/presentation/components/ui/checkbox"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/presentation/components/ui/form"

// ==== Component ====
export function BooksCheckbox({ form }: { form: FormType }) {
  // Return
  return (
    <FormField
      control={form.control}
      name="books"
      render={() => (
        <FormItem>
          <FormLabel>Livros</FormLabel>
          <div className="space-y-3">
            {books.map((book) => (
              <FormField
                key={book.id}
                control={form.control}
                name="books"
                render={({ field }) => {
                  return (
                    <FormItem
                      key={book.id}
                      className="flex items-start space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(book.id)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, book.id])
                              : field.onChange(
                                  field.value?.filter((value) => value !== book.id),
                                )
                          }}
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-normal">
                        {book.label}
                      </FormLabel>
                    </FormItem>
                  )
                }}
              />
            ))}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

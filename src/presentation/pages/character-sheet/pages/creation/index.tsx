// ==== Imports ====
// Externals
import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from "react-router-dom"
import type { z } from "zod"
import { CopyXIcon, SaveAllIcon } from "lucide-react"
// Schemas
import { formSchema } from "./schemas"
// Hooks
import { useForm } from "react-hook-form"
import { useCharacterSheetContext } from "../../context"
import { useNavigate } from "react-router-dom"
// Utils
import { initialFormState } from "./const"
import { ROUTES } from "@/utils/routes"
// Components
import { Button } from "@/presentation/components/ui/button"
import { Class } from "./components/class"
import { Info } from "./components/info"
import { Race } from "./components/race"
import { Form } from "@/presentation/components/ui/form"

// ==== Component ====
export function CharacterSheetCreationPage() {
  // Hooks
  const { characters } = useCharacterSheetContext()
  const navigate = useNavigate()

  // Form Handler
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialFormState,
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Save character sheet on local storage
    characters.push(values)
    localStorage.setItem("characters", JSON.stringify(characters))
    // Redirect to character sheet
    navigate(ROUTES.CHARACTER_SHEET)
  }

  // Return
  return (
    <div className="p-3">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3 lg:flex-row">
            <Info form={form} />
            <Class form={form} />
            <Race form={form} />
          </div>
          <div className="w-full flex justify-end gap-3 my-3">
            <Link to={ROUTES.CHARACTER_SHEET}>
              <Button variant="destructive" className="gap-3" type="button">
                <CopyXIcon /> Cancelar
              </Button>
            </Link>
            <Button variant="success" className="gap-3" type="submit">
              <SaveAllIcon /> Salvar
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

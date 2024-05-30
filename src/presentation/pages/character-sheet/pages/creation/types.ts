import type { UseFormReturn } from "react-hook-form"
import type { z } from "zod"
import type { formSchema } from "./schemas"

export type FormType = UseFormReturn<z.infer<typeof formSchema>, any, undefined>

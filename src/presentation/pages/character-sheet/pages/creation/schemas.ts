import { z } from "zod"

export const formSchema = z.object({
  id: z.string().min(1, { message: "ID inválido" }),
  name: z.string().min(1, { message: "Digite um nome" }),
  books: z.array(z.string()).refine((value) => value.some((book) => book), {
    message: "Selecione pelo menos um livro",
  }),
  class: z.string().min(1, { message: "Selecione uma classe" }),
  race: z.string().min(1, { message: "Selecione uma raça" }),
  level: z.number().int().min(1, { message: "Digite um nível válido" }),
})

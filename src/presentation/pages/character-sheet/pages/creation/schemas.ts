import { z } from "zod"

export const formSchema = z.object({
  id: z.string().min(1, { message: "ID inválido" }),
  level: z.number().int().min(1, { message: "Digite um nível válido" }),
  proficiency: z.number().int().min(1, { message: "Digite um valor válido" }),
  name: z.string().min(1, { message: "Digite um nome" }),
  alignment: z.string().min(1, { message: "Selecione um alinhamento" }),
  books: z.array(z.string()).refine((value) => value.some((book) => book), {
    message: "Selecione pelo menos um livro",
  }),
  race: z.string().min(1, { message: "Selecione uma raça" }),
  antecedent: z.string().min(1, { message: "Selecione um antecedente" }),
  class: z.string().min(1, { message: "Selecione uma classe" }),
})

import { Button } from "@/presentation/components/ui/button"
import { ROUTES } from "@/utils/routes"
import { ChevronsLeftIcon } from "lucide-react"
import { Link } from "react-router-dom"

export function NotFoundPage() {
  return (
    <div className="h-svh flex flex-col items-center justify-center gap-3 animate-fade-down duration-500">
      <h1 className="text-9xl font-serif text-primary">404</h1>
      <p>Página não encontrada!</p>
      <Link to={ROUTES.HOME}>
        <Button className="gap-3">
          <ChevronsLeftIcon /> Voltar para a página inicial
        </Button>
      </Link>
    </div>
  )
}

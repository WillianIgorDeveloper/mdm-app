// ==== Imports ====
// Externals
import { CircleAlertIcon, FilePlus2Icon, User2Icon } from "lucide-react"
// Components
import { Badge } from "@/presentation/components/ui/badge"
import { Button } from "@/presentation/components/ui/button"
import { Card, CardContent } from "@/presentation/components/ui/card"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/presentation/components/ui/alert"

// ==== Component ====
export function CharacterSheet() {
  // Return
  return (
    <div className="flex flex-col gap-3 container p-3">
      <Button className="gap-3 ml-auto">
        <FilePlus2Icon /> Criar
      </Button>

      <Alert>
        <AlertTitle className="flex gap-3 items-center">
          <CircleAlertIcon /> Sessão não iniciada!
        </AlertTitle>
        <AlertDescription>
          Suas fichas de personagem serão salvas localmente e não estarão disponíveis
          em outros dispositivos. Para salvar suas fichas na nuvem, faça login.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        <Card>
          <CardContent className="p-3">
            <div className="flex gap-6 items-center">
              <User2Icon size={30} />
              <div className="flex flex-col gap-2">
                <h2>Nome de personagem</h2>
                <div>
                  <Badge variant="outline">Classe</Badge>
                  <Badge variant="outline">Raça</Badge>
                  <Badge variant="outline">Nível</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3">
            <div className="flex gap-6 items-center">
              <User2Icon size={30} />
              <div className="flex flex-col gap-2">
                <h2>Nome de personagem</h2>
                <div>
                  <Badge variant="outline">Classe</Badge>
                  <Badge variant="outline">Raça</Badge>
                  <Badge variant="outline">Nível</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3">
            <div className="flex gap-6 items-center">
              <User2Icon size={30} />
              <div className="flex flex-col gap-2">
                <h2>Nome de personagem</h2>
                <div>
                  <Badge variant="outline">Classe</Badge>
                  <Badge variant="outline">Raça</Badge>
                  <Badge variant="outline">Nível</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3">
            <div className="flex gap-6 items-center">
              <User2Icon size={30} />
              <div className="flex flex-col gap-2">
                <h2>Nome de personagem</h2>
                <div>
                  <Badge variant="outline">Classe</Badge>
                  <Badge variant="outline">Raça</Badge>
                  <Badge variant="outline">Nível</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3">
            <div className="flex gap-6 items-center">
              <User2Icon size={30} />
              <div className="flex flex-col gap-2">
                <h2>Nome de personagem</h2>
                <div>
                  <Badge variant="outline">Classe</Badge>
                  <Badge variant="outline">Raça</Badge>
                  <Badge variant="outline">Nível</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

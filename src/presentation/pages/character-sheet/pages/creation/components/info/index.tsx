// ==== Imports ====
// Components
import { Card, CardContent, CardTitle } from "@/presentation/components/ui/card"
import { Input } from "@/presentation/components/ui/input"
import { Label } from "@/presentation/components/ui/label"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/presentation/components/ui/toggle-group"
import {
  SelectItem,
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/presentation/components/ui/select"

// ==== Component ====
export function Info() {
  // Return
  return (
    <Card className="flex-1 py-3">
      <CardTitle className="text-center py-2">Informações</CardTitle>
      <CardContent className="p-3">
        <form className="flex flex-col gap-6">
          <div className="w-full">
            <Label className="flex items-center justify-between">
              <p>Nome de personagem</p>
              <strong className="text-base">Nível: 1</strong>
            </Label>
            <Input />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Livros</Label>
            <ToggleGroup type="multiple" className="flex flex-col">
              <ToggleGroupItem value="a" className="w-full">
                Livro do jogador
              </ToggleGroupItem>
              <ToggleGroupItem value="b" className="w-full">
                Caldeirão de taxa
              </ToggleGroupItem>
              <ToggleGroupItem value="c" className="w-full">
                Monstros do multiverso
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div>
            <Label>Pontos de habilidade</Label>
            <div className="space-y-6">
              <div>
                <span>Força</span>
                <div className="flex gap-2 items-center">
                  <div className="w-full">
                    <span>base</span>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-full">
                    <span>bônus</span>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div>
                <span>Destreza</span>
                <div className="flex gap-2 items-center">
                  <div className="w-full">
                    <span>base</span>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-full">
                    <span>bônus</span>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div>
                <span>Constituição</span>
                <div className="flex gap-2 items-center">
                  <div className="w-full">
                    <span>base</span>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-full">
                    <span>bônus</span>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div>
                <span>Sabedoria</span>
                <div className="flex gap-2 items-center">
                  <div className="w-full">
                    <span>base</span>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-full">
                    <span>bônus</span>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div>
                <span>Inteligência</span>
                <div className="flex gap-2 items-center">
                  <div className="w-full">
                    <span>base</span>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-full">
                    <span>bônus</span>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div>
                <span>Carisma</span>
                <div className="flex gap-2 items-center">
                  <div className="w-full">
                    <span>base</span>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-full">
                    <span>bônus</span>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

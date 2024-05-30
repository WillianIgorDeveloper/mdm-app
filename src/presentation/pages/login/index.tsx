import { Button } from "@/presentation/components/ui/button"
import { Input } from "@/presentation/components/ui/input"
import { Label } from "@/presentation/components/ui/label"
import { Loader2Icon } from "lucide-react"

export function LoginPage() {
  return (
    <div className="h-screen flex">
      <div className="lg:flex-1 bg-brand-gradient flex items-center justify-center relative">
        <div className="absolute w-full h-full bg-primary/40 backdrop-blur-sm" />
      </div>
      <div className="w-full p-3 flex flex-col items-center justify-center shadow-xl lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl relative">
        {false && (
          <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center bg-background z-20">
            <Loader2Icon size={48} className="animate-spin" />
          </div>
        )}
        <form className="w-full flex flex-col items-center justify-center p-3 gap-3 max-w-sm mx-auto">
          <legend className="text-2xl font-semibold font-serif mb-3 animate-fade-down duration-500">
            Mestre das Masmorras
          </legend>
          <div className="w-full animate-fade-up duration-500">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Insira seu email..."
              required
            />
          </div>
          <Button className="w-full animate-fade-up duration-500">Entrar</Button>
        </form>
      </div>
    </div>
  )
}

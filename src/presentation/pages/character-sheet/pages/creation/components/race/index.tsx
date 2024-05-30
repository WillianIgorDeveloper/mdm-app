// ==== Imports ====
// Components
import { Card, CardContent, CardTitle } from "@/presentation/components/ui/card"
import { Label } from "@/presentation/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/presentation/components/ui/select"

// ==== Component ====
export function Race() {
  // Return
  return (
    <Card className="flex-1 py-3">
      <CardTitle className="text-center">Raça</CardTitle>
      <CardContent>
        <div>
          <Label>Raça</Label>
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
      </CardContent>
    </Card>
  )
}

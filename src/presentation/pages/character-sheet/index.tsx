// ==== Imports ====
// Externals
import { Outlet } from "react-router-dom"
// Contexts
import { CharacterSheetProvider } from "./context"

// ==== Component ====
export function CharacterSheetPage() {
  // Return
  return (
    <CharacterSheetProvider>
      <Outlet />
    </CharacterSheetProvider>
  )
}

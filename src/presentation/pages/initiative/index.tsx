// ==== Imports ====
// Pages
import { InitiativePageDefault } from "./pages/default"
// Providers
import { InitiativeProvider } from "./context"

// ==== Component ====
export function InitiativePage() {
  // Return
  return (
    <InitiativeProvider>
      <InitiativePageDefault />
    </InitiativeProvider>
  )
}

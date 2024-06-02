// ==== Imports ====
// External
import { Outlet } from "react-router-dom"
// Components
import { Navbar } from "@/presentation/components/composed/navbar"

// ==== Component ====
export function BaseLayout() {
  // Return
  return (
    <div>
      <Navbar />
      <div className="container py-3">
        <Outlet />
      </div>
    </div>
  )
}

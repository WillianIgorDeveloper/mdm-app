import { Outlet } from "react-router-dom"
import { Navbar } from "@/presentation/components/composed/navbar"

export function BaseLayout() {
  return (
    <div className="container py-3">
      <Navbar />
      <Outlet />
    </div>
  )
}

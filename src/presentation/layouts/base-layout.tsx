import { Outlet } from "react-router-dom"
import { Navbar } from "@/presentation/components/composed/navbar"

export function BaseLayout() {
  return (
    <div className="container">
      <Navbar />
      <Outlet />
    </div>
  )
}

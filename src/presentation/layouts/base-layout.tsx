import { Outlet } from "react-router-dom"
import { Navbar } from "../components/composed/navbar"

export function BaseLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

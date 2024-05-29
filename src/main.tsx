import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./index.css"
// Middlewares
import { OnlyPublicRoutes, ProtectedRoutes } from "@/middleware"
// State management
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
const queryClient = new QueryClient()
// Layouts
import { BaseLayout } from "@/presentation/layouts/base-layout"
// Pages
import { HomePage } from "@/presentation/pages/home"
import { InitiativePage } from "@/presentation/pages/initiative"
import { DungeonGeneratorPage } from "@/presentation/pages/dungeon-generator"
import { CharacterSheet } from "@/presentation/pages/character-sheet"
import { NotFoundPage } from "@/presentation/pages/not-found"
// OnlyPublicRoutes
import { LoginPage } from "@/presentation/pages/login"
// ProtectedRoutes
import { ProfilePage } from "@/presentation/pages/profile"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/iniciativa" element={<InitiativePage />} />
            <Route path="/gerador-de-masmorras" element={<DungeonGeneratorPage />} />
            <Route path="/character-sheet" element={<CharacterSheet />} />
          </Route>
          <Route element={<OnlyPublicRoutes />}>
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)

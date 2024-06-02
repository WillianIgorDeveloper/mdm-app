import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./index.css"
// Middlewares
import { OnlyPublicRoutes, ProtectedRoutes } from "@/middleware"
import { CharacterSheetActionMiddleware } from "@/presentation/pages/character-sheet/action-middleware"
// State management
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
const queryClient = new QueryClient()
// Layouts
import { BaseLayout } from "@/presentation/layouts/base-layout"
// Pages
import { HomePage } from "@/presentation/pages/home"
import { InitiativePage } from "@/presentation/pages/initiative"
import { DungeonGeneratorPage } from "@/presentation/pages/dungeon-generator"
import { CharacterSheetPage } from "@/presentation/pages/character-sheet"
import { CharacterSheetDefaultPage } from "./presentation/pages/character-sheet/pages/default"
import { CharacterSheetCreationPage } from "@/presentation/pages/character-sheet/pages/creation"
import { CharacterSheetCharacterPage } from "./presentation/pages/character-sheet/pages/[id]"
import { CharacterSheetEditPage } from "@/presentation/pages/character-sheet/pages/edit[id]"
import { CharacterSheetUpPage } from "@/presentation/pages/character-sheet/pages/up[id]"
import { NotFoundPage } from "@/presentation/pages/not-found"
// OnlyPublicRoutes
import { LoginPage } from "@/presentation/pages/login"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route index element={<HomePage />} />
            <Route path="iniciativa" element={<InitiativePage />} />
            <Route path="gerador-de-masmorras" element={<DungeonGeneratorPage />} />
            <Route path="ficha-de-personagem" element={<CharacterSheetPage />}>
              <Route index element={<CharacterSheetDefaultPage />} />
              <Route path="criar" element={<CharacterSheetCreationPage />} />
              <Route element={<CharacterSheetActionMiddleware />}>
                <Route path=":id" element={<CharacterSheetCharacterPage />} />
                <Route path="editar/:id" element={<CharacterSheetEditPage />} />
                <Route path="upar/:id" element={<CharacterSheetUpPage />} />
              </Route>
            </Route>
          </Route>
          <Route element={<OnlyPublicRoutes />}>
            <Route path="login" element={<LoginPage />} />
          </Route>
          <Route element={<ProtectedRoutes />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)

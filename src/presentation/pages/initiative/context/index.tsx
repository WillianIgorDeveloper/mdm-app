import { createContext, useContext, useEffect, useState } from "react"
import type { InitiativeCardType } from "../entities"

// ==== Types ====
type InitiativeContextType = {
  initiativeCards: InitiativeCardType[]
  round: number
  currentTurn: number
  handleAddPlayerCard: () => void
  handleAddEnemyCard: () => void
  handleDeleteCard: (id: number) => void
  handleClearCards: () => void
  handleUpdateValue: (params: { id: number; newValue: string }) => void
  handleUpdateName: (params: { id: number; newName: string }) => void
  handleSort: () => void
  handleNextTurn: () => void
  handlePrevTurn: () => void
  handleStartCombat: () => void
  handleStopCombat: () => void
}

type InitiativeProviderType = {
  children: React.ReactNode
}

// ==== Context ====
const InitiativeContext = createContext<InitiativeContextType | undefined>(undefined)

// ==== Provider ====
export function InitiativeProvider({ children }: InitiativeProviderType) {
  // states
  const [initiativeCards, setInitiativeCards] = useState<InitiativeCardType[]>([])
  const [round, setRound] = useState(-2)
  const [currentTurn, setCurrentTurn] = useState(-2)

  // Handlers
  function handleAddPlayerCard() {
    setInitiativeCards((prev) => [
      ...prev,
      { id: Math.random(), type: "player", value: "", name: "" },
    ])
  }

  function handleAddEnemyCard() {
    setInitiativeCards((prev) => [
      ...prev,
      { id: Math.random(), type: "enemy", value: "", name: "" },
    ])
  }

  function handleDeleteCard(id: number) {
    setInitiativeCards((prev) => prev.filter((card) => card.id !== id))
  }

  function handleClearCards() {
    setInitiativeCards([])
    localStorage.removeItem("initiativeCards")
    setRound(-2)
    setCurrentTurn(-2)
    localStorage.removeItem("round")
    localStorage.removeItem("currentTurn")
  }

  function handleUpdateValue({ id, newValue }: { id: number; newValue: string }) {
    setInitiativeCards((prev) =>
      prev.map((card) => (card.id === id ? { ...card, value: newValue } : card)),
    )
  }

  function handleUpdateName({ id, newName }: { id: number; newName: string }) {
    setInitiativeCards((prev) =>
      prev.map((card) => (card.id === id ? { ...card, name: newName } : card)),
    )
  }

  function handleSort() {
    // Sort by value and change the id to a new random number
    // This is necessary to force the re-render of the components
    setInitiativeCards((prev) =>
      prev
        .sort((a, b) => Number(b.value) - Number(a.value))
        .map((card) => ({ ...card, id: Math.random() })),
    )
  }

  function handleNextTurn() {
    // Check if the current turn is the last one
    if (currentTurn === initiativeCards.length - 1) {
      // If it is, increment the round and reset the current turn
      setRound((prev) => prev + 1)
      setCurrentTurn(0)
    } else {
      // If it's not, increment the current turn
      setCurrentTurn((prev) => prev + 1)
    }
  }

  function handlePrevTurn() {
    // Check if the current turn is the first one
    if (currentTurn === 0) {
      // If it is, decrement the round and set the current turn to the last one
      setRound((prev) => prev - 1)
      setCurrentTurn(initiativeCards.length - 1)
    } else {
      // If it's not, decrement the current turn
      setCurrentTurn((prev) => prev - 1)
    }
  }

  function handleStartCombat() {
    handleSort()
    setRound(1)
    setCurrentTurn(0)
  }

  function handleStopCombat() {
    setRound(-2)
    setCurrentTurn(-2)
    localStorage.removeItem("round")
    localStorage.removeItem("currentTurn")
  }

  // Effects
  useEffect(() => {
    // Save on local storage when the initiativeCards change, if it's not the first render
    if (initiativeCards.length !== 0)
      localStorage.setItem("initiativeCards", JSON.stringify(initiativeCards))
  }, [initiativeCards])

  useEffect(() => {
    // Save on local storage when the round changes, if it's not the first render
    if (round !== -2) localStorage.setItem("round", JSON.stringify(round))
  }, [round])

  useEffect(() => {
    // Save on local storage when the currentTurn changes, if it's not the first render
    if (currentTurn !== -2)
      localStorage.setItem("currentTurn", JSON.stringify(currentTurn))
  }, [currentTurn])

  useEffect(() => {
    // Load from local storage when the component mounts
    const savedInitiativeCards = localStorage.getItem("initiativeCards")
    if (savedInitiativeCards) setInitiativeCards(JSON.parse(savedInitiativeCards))
    const savedRound = localStorage.getItem("round")
    if (savedRound) setRound(Number(savedRound))
    const savedCurrentTurn = localStorage.getItem("currentTurn")
    if (savedCurrentTurn) setCurrentTurn(Number(savedCurrentTurn))
  }, [])

  // Return
  return (
    <InitiativeContext.Provider
      value={{
        initiativeCards,
        round,
        currentTurn,
        handleAddPlayerCard,
        handleAddEnemyCard,
        handleDeleteCard,
        handleClearCards,
        handleUpdateValue,
        handleUpdateName,
        handleSort,
        handleNextTurn,
        handlePrevTurn,
        handleStartCombat,
        handleStopCombat,
      }}
    >
      {children}
    </InitiativeContext.Provider>
  )
}

export function useInitiativeContext() {
  const context = useContext(InitiativeContext)
  if (!context)
    throw new Error("useInitiativeContext must be used within a InitiativeProvider")
  return context
}

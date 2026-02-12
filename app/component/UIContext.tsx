// app/component/UIContext.tsx
'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

interface UIContextType {
  showStep1Form: boolean;
  setShowStep1Form: (show: boolean) => void;
  showStep2Form: boolean;
  setShowStep2Form: (show: boolean) => void;
  // Add other UI states as needed
}

const UIContext = createContext<UIContextType | null>(null)

export function UIProvider({ children }: { children: ReactNode }) {
  const [showStep1Form, setShowStep1Form] = useState(false)
  const [showStep2Form, setShowStep2Form] = useState(false)
  
  return (
    <UIContext.Provider value={{
      showStep1Form,
      setShowStep1Form,
      showStep2Form,
      setShowStep2Form
    }}>
      {children}
    </UIContext.Provider>
  )
}

export function useUI() {
  const context = useContext(UIContext)
  if (!context) {
    throw new Error('useUI must be used within UIProvider')
  }
  return context
}
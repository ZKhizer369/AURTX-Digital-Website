import { create } from 'zustand'

interface AppState {
  greeting: string
}

export const useAppStore = create<AppState>()(() => ({
  greeting: 'Hello World!',
}))

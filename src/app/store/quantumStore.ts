import { create } from 'zustand'

type QuantumState = {
  n: number
  l: number
  m: number
  setQuantumNumbers: (n: number, l: number, m: number) => void
}

export const useQuantumStore = create<QuantumState>((set) => ({
  n: 3,
  l: 2,
  m: 0,
  setQuantumNumbers: (n, l, m) => set({ n, l, m })
}))
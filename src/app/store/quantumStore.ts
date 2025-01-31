import { create } from 'zustand'

type QuantumState = {
  n: number
  l: number
  m: number
  i: number
  setQuantumNumbers: (n: number, l: number, m: number, i: number) => void
}

export const useQuantumStore = create<QuantumState>((set) => ({
  n: 3,
  l: 2,
  m: 0,
  i: 0,
  setQuantumNumbers: (n, l, m, i) => set({ n, l, m, i })
}))
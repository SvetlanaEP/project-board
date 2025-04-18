import { create } from "zustand";

type Role = 'customer' | 'executor' | 'admin' | null

interface AuthState {
  role: Role
  setRole: (role: Role) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  role: null,
  setRole: (role) => set({role}),
  logout: () => set({role: null})
}))
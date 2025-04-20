import { create } from "zustand";

type Role = 'customer' | 'executor' | 'admin' | null

interface AuthState {
  role: Role
  username: string | null
  setRole: (role: AuthState['role'], username: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  role: null,
  username: null,
  setRole: (role, username) => set({role, username}),
  logout: () => set({role: null, username: null})
}))
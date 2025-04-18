import { create } from "zustand";
import { ProjectStatus } from "../../mock/projects";

interface ProjectFilterState {
  activeStatus: ProjectStatus;
  setStatus: (status: ProjectStatus) => void
}

export const useProjectFilterStore = create<ProjectFilterState>((set) => ({
  activeStatus: 'waiting',
  setStatus: (status) => set({activeStatus: status})
}))
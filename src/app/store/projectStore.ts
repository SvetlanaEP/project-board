import { create } from "zustand";
import { mockProjects, Project, ProjectStatus } from "../../mock/projects";

interface ProjectFilterState {
  activeStatus: ProjectStatus;
  setStatus: (status: ProjectStatus) => void
}

interface ProjectState {
  projects: Project[];
  setProjects: (projects: Project[]) => void;
}

export const useProjectFilterStore = create<ProjectFilterState>((set) => ({
  activeStatus: 'Ожидание',
  setStatus: (status) => set({activeStatus: status})
}))

export const useProjectsStore = create<ProjectState>((set) => ({
  projects: mockProjects,
  setProjects: (projects) => set({projects})
}))
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Project, ProjectStatus } from '../../mock/projects';  
import { mockProjects } from '../../mock/projects';

interface ProjectsState {
  projects: Project[];
}

const initialState: ProjectsState = {
  projects: mockProjects,
};

interface UpdateStatusPayload {
  id: string;
  status: ProjectStatus;
}

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    updateProjectStatus: (state, action: PayloadAction<UpdateStatusPayload>) => {
      const { id, status } = action.payload;
      const project = state.projects.find((p) => p.id === id);
      if (project) {
        project.status = status;
      }
    },
    
  },
});

export const { updateProjectStatus } = projectsSlice.actions;

export default projectsSlice.reducer;

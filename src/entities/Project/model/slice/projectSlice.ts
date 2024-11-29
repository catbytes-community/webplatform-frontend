import { createSlice } from '@reduxjs/toolkit';
import { ProjectSchema } from "../types/project.ts";

const initialState: ProjectSchema = {};

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {},
});

// Action creators are generated for each case reducer function
export const { actions: projectActions } = projectSlice;
export const { reducer: projectReducer } = projectSlice;
import { createSlice } from "@reduxjs/toolkit";

const defaultModule = {
  name: "New Module",
  description: "Module Description",
};

const initialState = {
  modules: [],
  module: defaultModule,
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    setModule: (state, action) => {
      state.module = action.payload;
    },
    setModules: (state, action) => {
      state.modules = action.payload;
    },
    addModule: (state, action) => {
      state.modules = [...state.modules, action.payload];
      state.module = defaultModule;
    },
    deleteModule: (state, action) => {
      state.modules = state.modules.filter(
        (module) => module._id !== action.payload
      );
      state.module = defaultModule;
    },
    editModule: (state, action) => {
      state.modules = state.modules.map((module) => {
        if (module._id === action.payload._id) {
          return action.payload;
        } else {
          return module;
        }
      });
      state.module = defaultModule;
    },
  },
});

export const { addModule, deleteModule, editModule, setModule, setModules } =
  modulesSlice.actions;
export default modulesSlice.reducer;

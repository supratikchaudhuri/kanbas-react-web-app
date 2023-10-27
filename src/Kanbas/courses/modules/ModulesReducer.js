import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";

const defaultModule = {
  name: "",
  description: "",
}
const initialState = {
  modules: db.modules,
  module: defaultModule
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addModule: (state, action) => {
      state.modules = [
        ...state.modules,
        { ...action.payload, _id: new Date().getTime().toString() }
      ];
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
    setModule: (state, action) => {
      state.module = action.payload;
    },
  },
});

export const { addModule, deleteModule, editModule, setModule } = modulesSlice.actions;
export default modulesSlice.reducer;
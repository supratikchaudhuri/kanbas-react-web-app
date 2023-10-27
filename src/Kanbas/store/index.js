import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../courses/modules/ModulesReducer";

const store = configureStore({
  reducer: {
    modulesReducer
  }
});


export default store;
import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../courses/modules/ModulesReducer";
import assignmentsReducer from "../courses/assignemnts/assignmentsReducer";

const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer,
  }
});


export default store;
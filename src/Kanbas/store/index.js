import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../courses/modules/ModulesReducer";
import assignmentsReducer from "../courses/assignemnts/assignmentsReducer";
// import profileReducer from "../Account/profile/ProfileReducer";

const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer,
    // profileReducer,
  },
});

export default store;

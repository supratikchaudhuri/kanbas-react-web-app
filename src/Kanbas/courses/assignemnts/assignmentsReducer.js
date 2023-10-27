import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";

const defaultAssignment = {
  title: "New Assignment",
  description: "Assignment Description",
}

const initialState = {
  assignments: db.assignments,
  assignment: defaultAssignment,
};

const assignmentSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [
        ...state.assignments,
        { ...action.payload, _id: new Date().getTime().toString() }
      ];
      state.assignment = defaultAssignment;
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
      state.assignment = defaultAssignment;
    },
    editAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
      state.assignment = defaultAssignment;
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  }
})

export const { addAssignment, deleteAssignment, editAssignment, setAssignment } = assignmentSlice.actions;
export default assignmentSlice.reducer;
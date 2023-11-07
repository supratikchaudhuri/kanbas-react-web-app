import { createSlice } from "@reduxjs/toolkit";

const defaultAssignment = {
  title: "New Assignment",
  description: "Assignment Description",
  dueDate: "2023-10-04",
  availableFromDate: "2023-09-20",
  availableUntilDate: "2023-10-04",
  points: 100,
};

const initialState = {
  assignments: [],
  assignment: defaultAssignment,
};

const assignmentSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
    addAssignment: (state, action) => {
      state.assignments = [...state.assignments, action.payload];
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
  },
});

export const {
  addAssignment,
  deleteAssignment,
  editAssignment,
  setAssignment,
  setAssignments,
} = assignmentSlice.actions;
export default assignmentSlice.reducer;

import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const findAssignmentsForCourse = async (courseId) => {
  try {
    const res = await axios.get(`${BASE_URL}/courses/${courseId}/assignments`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const createAssignment = async (courseId, assignment) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/courses/${courseId}/assignments`,
      assignment
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateAssignment = async (assignment) => {
  try {
    const res = await axios.put(
      `${BASE_URL}/assignments/${assignment._id}`,
      assignment
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteAssignment = async (assignmentId) => {
  try {
    const res = await axios.delete(`${BASE_URL}/assignments/${assignmentId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

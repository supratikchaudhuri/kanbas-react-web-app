import axios from "axios";

export const findAssignmentsForCourse = async (courseId) => {
  try {
    const res = await axios.get(
      `http://localhost:4000/api/courses/${courseId}/assignments`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const createAssignment = async (courseId, assignment) => {
  try {
    const res = await axios.post(
      `http://localhost:4000/api/courses/${courseId}/assignments`,
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
      `http://localhost:4000/api/assignments/${assignment._id}`,
      assignment
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteAssignment = async (assignmentId) => {
  try {
    const res = await axios.delete(
      `http://localhost:4000/api/assignments/${assignmentId}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const COURSES_URL = `${BASE_URL}/courses`;
const MODULES_URL = `${BASE_URL}/modules`;

export const findModulesForCourse = async (courseId) => {
  try {
    const response = await axios.get(`${COURSES_URL}/${courseId}/modules`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createModule = async (courseId, module) => {
  try {
    const response = await axios.post(
      `${COURSES_URL}/${courseId}/modules`,
      module
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteModule = async (moduleId) => {
  try {
    const response = await axios.delete(`${MODULES_URL}/${moduleId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const editModule = async (module) => {
  try {
    const response = await axios.put(`${MODULES_URL}/${module._id}`, module);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

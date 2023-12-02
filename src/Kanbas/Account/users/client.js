import axios from "axios";
export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const USERS_API = `${BASE_URL}/users`;

export const signin = async (credentials) => {
  try {
    const response = await axios.post(`${USERS_API}/signin`, credentials);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const signup = async (credentials) => {
  try {
    const response = await axios.post(`${USERS_API}/signup`, credentials);
    return { status: 200, data: response.data };
  } catch (err) {
    console.log(err);
    return { status: err.response.status, data: err.response.data };
  }
};

export const signout = async () => {
  try {
    const response = await axios.post(`${USERS_API}/signout`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const account = async () => {
  try {
    const response = await axios.post(`${USERS_API}/account`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateUser = async (updatedUser) => {
  try {
    const response = await axios.put(
      `${USERS_API}/${updatedUser._id}`,
      updatedUser
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const findAllUsers = async () => {
  try {
    const response = await axios.get(`${USERS_API}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const createUser = async (newUser) => {
  try {
    const response = await axios.post(`${USERS_API}`, newUser);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const findUserById = async (id) => {
  try {
    const response = await axios.get(`${USERS_API}/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = async (user) => {
  try {
    const response = await axios.delete(`${USERS_API}/${user._id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const findProfileById = async (id) => {
  try {
    const response = await axios.get(`${USERS_API}/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

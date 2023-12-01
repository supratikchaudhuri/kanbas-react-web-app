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
    console.log(updatedUser);
    const response = await axios.put(
      `${USERS_API}/${updatedUser._id}`,
      updatedUser
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

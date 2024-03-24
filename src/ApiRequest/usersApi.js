import axios from "axios";

export const axiosTwo = axios.create({
  baseURL: "https://reqres.in/api",
});
export const getUsersPage = async (pageParam = 1) => {
  const response = await axiosTwo.get(`/users?page=${pageParam}`);
  return response.data;
};

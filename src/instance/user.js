import instance from "./instance";

export const signin = (user) => {
  const url = `/login`;
  return instance.post(url, user);
};
export const signup = (user) => {
  const url = `/signup`;
  return instance.post(url, user);
};
export const getUser = (id) => {
  const url = `/users/${id}`;
  return instance.get(url, id);
};
export const UpdateUser = (data) => {
  const url = `/users/${data.id}`;
  return instance.patch(url, data);
};

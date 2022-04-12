import instance from "./instance";

export const getAllCates = () => {
  const url = "/category";
  return instance.get(url);
};

export const getCate = (id) => {
  const url = `/category/${id}`;
  return instance.get(url);
};

export const addCate = (post) => {
  const url = "/category";
  return instance.post(url, post);
};
export const updateCate = (post) => {
  const url = `/category/${post.id}`;
  return instance.put(url, post);
};
export const removeCategory = (id) => {
  const url = `/category/${id}`;
  return instance.delete(url, id);
};

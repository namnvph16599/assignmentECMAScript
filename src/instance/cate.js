import instance from "./instance";

export const getAllCates = () => {
  const url = "/categories";
  return instance.get(url);
};

export const getCate = (id) => {
  const url = `/categories/${id}`;
  return instance.get(url);
};

export const addCate = (post) => {
  const url = "/categories";
  return instance.post(url, post);
};
export const updateCate = (post) => {
  const url = `/categories/${post.id}`;
  return instance.put(url, post);
};
export const removeCategory = (id) => {
  const url = `/categories/${id}`;
  return instance.delete(url, id);
};

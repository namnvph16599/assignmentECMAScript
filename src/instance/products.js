import instance from "./instance";

export const getAllProducts = () => {
  const url = `/products`;
  return instance.get(url);
};

export const getProduct = (id) => {
  const url = `/products/${id}`;
  return instance.get(url);
};
export const addProducts = (data) => {
  const url = `/products`;
  return instance.post(url, data);
};
export const updateProducts = (data) => {
  const url = `/products/${data.id}`;
  return instance.put(url, data);
};
export const removeProducts = (id) => {
  const url = `/products/${id}`;
  return instance.delete(url);
};

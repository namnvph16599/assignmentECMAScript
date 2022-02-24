import instance from "./instance";

export const getAllProducts = () => {
  const url = `/products`;
  return instance.get(url);
};

export const getProductsbyCate = (id) => {
  const url = `/products?cate_id=${id}`;
  return instance.get(url, id);
};
export const getProductsbySeacch = (dataSearch) => {
  const url = `/products?q=${dataSearch}`;
  return instance.get(url, dataSearch);
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

export const addOrder = (data) => {
  const url = `/orders`;
  return instance.post(url, data);
};
export const addOrderDetail = (data) => {
  const url = `/orderDetails`;
  return instance.post(url, data);
};

export const getOrderByUser = (id) => {
  const url = `/orders?_expand=orderDetail&userId=/${id}`;
  return instance.get(url, id);
};

export const removeOrders = (id) => {
  const url = `/orders/${id}`;
  return instance.delete(url);
};
export const removeOrdersDetails = (id) => {
  const url = `/orderDetails/${id}`;
  return instance.delete(url);
};
export const getOrderDetailById = (id) => {
  const url = `orderDetails/${id}`;
  return instance.get(url);
};
export const getOrderByID = (id) => {
  const url = `/orders/${id}`;
  return instance.get(url, id);
};

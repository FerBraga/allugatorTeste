import axios from 'axios';

const app = axios.create({
  baseURL: 'http://localhost:3001',
});

export const getProducts = async () => {
  const { data } = await app.get('/products')
    .catch((error) => error)
  return data;
};

export const getProductInfo = async (id) => {
  const { data } = await app.get(`/info/${id}`)
    .catch((error) => error)
  return data;
};

export const getProductByName = async (name) => {
  const { data } = await app.get(`/products/search?name=${name}`)
    .catch((error) => error)
  return data;
};

export const getByOrderValue = async (value) => {
  const data = await app.get(`/order?value=${value}`)
    .catch((error) => error)
  return data;
};

export const getByAlphabeticalOrder = async () => {
  const { data } = await app.get('/order/alphabetical')
    .catch((error) => error)
  return data;
};

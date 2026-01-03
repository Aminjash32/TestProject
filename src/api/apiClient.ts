import axios from 'axios';
import { Product } from '../types/productInterface';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

export const getProducts = async (): Promise<Product[]> => {
  const res = await api.get('/products');
  return res.data;
};

export const getProductById = async (id: string): Promise<Product> => {
  const res = await api.get(`/products/${id}`);
  return res.data;
};

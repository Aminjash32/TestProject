import { Product } from "@/src/types/productInterface";
import { useEffect, useState } from "react";
import { getRequest } from "../api/apiClient";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [productDetails, setProductDetails] = useState<Product | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await getRequest<Product[]>("/products");
      setProducts(res);
    } catch (e) {
      console.error("Products fetch error", e);
    } finally {
      setLoading(false);
    }
  };

  const fetchProductById = async (id: string) => {
    try {
      setLoading(true);
      const res = await getRequest<Product>(`/products/${id}`);
      setProductDetails(res);
    } catch (e) {
      console.error("Product fetch error", e);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await getRequest<string[]>("/products/categories");
      setCategories(res);
    } catch (e) {
      console.error("Categories fetch error", e);
    }
  };

  return {
    products,
    productDetails,
    categories,
    loading,
    fetchProducts,
    fetchProductById,
    fetchCategories,
  };
}

import { Product } from "@/src/types/productInterface";
import { useEffect, useState } from "react";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (e) {
      console.error("Products fetch error", e);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await res.json();
      setCategories(data);
    } catch (e) {
      console.error("Categories fetch error", e);
    }
  };

  return {
    products,
    categories,
    loading,
  };
}

import CategoryChips from "@/components/CategoryChips";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import SortBar from "@/components/SortBar";
import { useProducts } from "@/src/hooks/UseProducts";
import { useDebounce } from "@/src/hooks/useDebounce";
import { FilterState } from "@/src/types/fitlerOptions";
import { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import "react-native-css-interop/jsx-runtime";

export default function ProductsListing() {
  const { products, categories, loading} = useProducts();

  const [filters, setFilters] = useState<FilterState>({
    search: "",
    category: null,
    sort: null,
  });

  const debouncedSearch = useDebounce(filters.search, 500);

  const filteredProducts = products
    .filter((p) =>
      p.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
    .filter((p) => (filters.category ? p.category === filters.category : true))
    .sort((a, b) => {
      switch (filters.sort) {
        case "PRICE_LOW_HIGH":
          return a.price - b.price;
        case "PRICE_HIGH_LOW":
          return b.price - a.price;
        case "NAME_A_Z":
          return a.title.localeCompare(b.title);
        case "NAME_Z_A":
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

  return (
    <View style={styles.container}>
      {/* Search */}
      <View style={styles.searchContainer}>
        <SearchBar
          value={filters.search}
          onChangeText={(text) =>
            setFilters((prev) => ({
              ...prev,
              search: text,
            }))
          }
          onClear={() =>
            setFilters((prev) => ({
              ...prev,
              search: "",
            }))
          }
        />
      </View>

      {/* Categories */}
      <CategoryChips
        categories={categories}
        selected={filters.category}
        onSelect={(category) =>
          setFilters((prev) => ({
            ...prev,
            category,
          }))
        }
      />

      {/* Sort */}
      <SortBar
        selected={filters.sort}
        onSelect={(sort) =>
          setFilters((prev) => ({
            ...prev,
            sort,
          }))
        }
        onClear={() =>
          setFilters((prev) => ({
            ...prev,
            sort: null,
          }))
        }
      />

      {/* Products */}
      {loading ? (
        <ActivityIndicator size={"large"} style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }} />
      ) : filteredProducts.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>No results found</Text>
        </View>
      ) : (
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ProductCard product={item} />}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  emptyState: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    color: "#6B7280",
    fontSize: 14,
  },
  listContent: {
  },
});

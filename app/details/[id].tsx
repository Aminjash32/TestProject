import { getProductById } from "@/src/api/apiClient";
import { Product } from "@/src/types/productInterface";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [product, setProduct] =
    useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    getProductById(id)
      .then(setProduct)
      .finally(() => setLoading(false));
  }, [id]);

  // Loader
  if (loading || !product) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical
    >
      {/* Image */}
      <Image
        source={product.image}
        style={styles.image}
        contentFit="contain"
        cachePolicy="memory-disk"
        transition={200}
      />

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>
          {product.title}
        </Text>

        <Text style={styles.price}>
          ₹ {product.price}
        </Text>

        <View style={styles.divider} />

        <Text style={styles.description}>
          {product.description}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 12,
    backgroundColor: "#ede9fe", // purple-200/300 vibe
  },
  content: {
    padding: 16,
    rowGap: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111827", // gray-900
  },
  price: {
    marginTop: 16,
    fontSize: 24,
    fontWeight: "700",
    color: "#ea580c", // orange-600
  },
  divider: {
    height: 1,
    backgroundColor: "#e5e7eb", // gray-200
    marginVertical: 16,
  },
  description: {
    fontSize: 16,
    color: "#4b5563", // gray-600
    lineHeight: 24,
  },
});

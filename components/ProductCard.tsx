import { Product } from "@/src/types/productInterface";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { memo } from "react";
import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();

  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: "/details/[id]",
          params: { id: product.id.toString() },
        })
      }
      android_ripple={{ color: "#e5e7eb" }}
      style={({ pressed }) => [
        styles.card,
        pressed && styles.pressed,
        Platform.OS === "android" && styles.androidElevation,
      ]}
    >
      {/* Row Layout */}
      <View style={styles.row}>
        {/* Image */}
        <View style={styles.imageWrapper}>
          <Image
            source={product.image}
            contentFit="contain"
            style={styles.image}
            cachePolicy="memory-disk"
            transition={250}
          />
        </View>

        {/* Text Container */}
        <View style={styles.content}>
          {/* Category */}
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>
              {product.category}
            </Text>
          </View>

          {/* Title */}
          <Text
            numberOfLines={2}
            style={styles.title}
          >
            {product.title}
          </Text>

          {/* Price + CTA */}
          <View style={styles.footer}>
            <Text style={styles.price}>
              ₹ {product.price}
            </Text>

            <View style={styles.cta}>
              <Text style={styles.ctaText}>
                View
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

export default memo(ProductCard);

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: 16,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#f3f4f6", // gray-100
  },
  pressed: {
    opacity: 0.95,
  },
  androidElevation: {
    elevation: 3,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    padding: 16,
    gap: 16,
    alignItems: "flex-start",
  },
  imageWrapper: {
    height: 96,
    width: 96,
    borderRadius: 12,
    backgroundColor: "#f3f4f6",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 8,
  },
  content: {
    flex: 1,
  },
  categoryBadge: {
    alignSelf: "flex-start",
    marginBottom: 4,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: "#fff7ed", // orange-50
  },
  categoryText: {
    fontSize: 11,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    color: "#ea580c", // orange-600
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827", // gray-900
    lineHeight: 20,
  },
  footer: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },
  cta: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "#ea580c",
  },
  ctaText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#ffffff",
  },
});

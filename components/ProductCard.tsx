import { Product } from "@/src/types/productInterface";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { memo } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

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
      android_ripple={{ color: "#b9b9b9ff" }}
      style={({ pressed }) => [
        styles.card,
        pressed && styles.pressed,
        Platform.OS === "android" && styles.androidElevation,
      ]}
    >
      <View style={styles.row}>
        <View style={styles.imageWrapper}>
          <Image
            source={product.image}
            contentFit="contain"
            style={styles.image}
            cachePolicy="memory-disk"
            transition={250}
          />
        </View>

        <View style={styles.content}>
          <Text numberOfLines={2} style={styles.title}>
            {product.title}
          </Text>

          <View style={styles.footer}>
            <Text style={styles.price}>₹ {product.price}</Text>

            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>{product.category}</Text>
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
    marginHorizontal: 2,
    backgroundColor: "#ffffff",
  },
  pressed: {
    opacity: 0.95,
  },
  androidElevation: {
    elevation: 1,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    padding: 12,
    gap: 12,
    alignItems: "center",
  },
  imageWrapper: {
    height: 90,
    width: 90,
    borderRadius: 12,
    backgroundColor: "#f3f4f6",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
  },
  content: {
    flex: 1,
    padding: 6,
  },
  categoryBadge: {
    alignSelf: "flex-start",
    marginTop: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: "#fff7ed",
  },
  categoryText: {
    fontSize: 11,
    fontWeight: "600",
    textTransform: "capitalize",
    letterSpacing: 0.5,
    color: "#ea580c",
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
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
    color: "#ea580c",
  },
});

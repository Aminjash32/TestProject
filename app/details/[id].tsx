import Loader from "@/components/Loader";
import Colors from "@/constants/Colors";
import { useProducts } from "@/src/hooks/useProducts";
import { Image } from "expo-image";
import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { productDetails, loading, fetchProductById } = useProducts();

  useEffect(() => {
    if (id) {
      fetchProductById(id);
    }
  }, [id]);

  if (loading || !productDetails) {
    return (
      <View style={styles.loader}>
        <Loader />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Stack.Screen options={{ title: productDetails.title }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageWrapper}>
          <Image
            source={productDetails.image}
            style={styles.image}
            contentFit="contain"
            cachePolicy="memory-disk"
            transition={200}
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>{productDetails.title}</Text>

          <View style={styles.priceRow}>
            <Text style={styles.price}>₹ {productDetails.price}</Text>

            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>{productDetails.category}</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <Text style={styles.description}>{productDetails.description}</Text>
        </View>
      </ScrollView>

      {/* Bottom Section */}
      <View style={styles.bottomCTA}>
        <Pressable
          onPress={() => {}}
          style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}
        >
          <Text style={styles.btnText}>Buy Now</Text>
        </Pressable>
      </View>
    </View>
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
  imageWrapper: {
    width: "100%",
    height: 320,
    backgroundColor: "#f3f4f6",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  content: {
    padding: 14,
    rowGap: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111827",
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 14,
  },

  price: {
    marginTop: 8,
    fontSize: 24,
    fontWeight: "700",
    color: "#ea580c",
  },
  categoryBadge: {
    alignSelf: "flex-end",
    marginTop: 4,
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
  divider: {
    height: 1,
    backgroundColor: "#e5e7eb",
    marginVertical: 16,
  },
  description: {
    fontSize: 14,
    color: "#4b5563",
    lineHeight: 22,
    textTransform: "capitalize",
  },

  bottomCTA: {
    position: "relative",
    bottom: 0,
    left: 0,
    right: 0,

    paddingHorizontal: 16,
    paddingVertical: 12,

    backgroundColor: "#fff",

    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },

  btn: {
    backgroundColor: Colors.light.tint,
    height: 56,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
    marginVertical: 20,
    shadowColor: Colors.light.tint,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },

  btnPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },

  btnText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0.4,
  },
});

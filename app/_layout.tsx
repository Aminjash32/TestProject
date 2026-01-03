import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        statusBarHidden: true,
        animation: "slide_from_right",
      }}
    >
      {/* Tabs group – NO HEADER */}
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />

      {/* Details screen – HEADER ENABLED */}
      <Stack.Screen
        name="details/[id]"
        options={{
          title: "Product Details",
          headerBackTitle: "Back",
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
}

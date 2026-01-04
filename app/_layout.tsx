import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          animation: "slide_from_right",
          statusBarHidden: false,
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="details/[id]"
          options={{
            headerTitleAlign: "left",
            headerShadowVisible: false,
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor: Colors.light.tint,
            },
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}

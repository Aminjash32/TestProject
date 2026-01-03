import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SearchBar } from "react-native-screens";

function TabBarIcon({
  name,
  color,
}: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={24} name={name} color={color} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#9CA3AF",

        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopWidth: 0.5,
          borderTopColor: "#E5E7EB",

        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShadowVisible: false,
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="shopping-cart" color={color} />,
          headerShown: true,
          headerTitle: () => null, // remove title
          headerStyle: {
            backgroundColor: "#ffffff",
          },
          headerShadowVisible: false,
          headerLeft: () => null,
          headerRight: () => null,
          header: () => (
            <View style={headerStyles.header}>
              <SearchBar />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const headerStyles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    paddingTop: 40,
    backgroundColor: "#ffffff",
  },
});

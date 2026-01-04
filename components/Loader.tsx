import Colors from "@/constants/Colors";
import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function Loader() {
  return (
    <View>
      <ActivityIndicator
        size={"large"}
        color={Colors.light.tint}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

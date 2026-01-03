import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

interface Props {
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  onClear?: () => void;
}

export default function SearchBar({
  value,
  onChangeText,
  placeholder = "Search products",
  onClear,
}: Props) {
  return (
    <View style={styles.container}>
      <FontAwesome
        name="search"
        size={16}
        color="#9CA3AF"
        style={styles.icon}
      />

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        style={styles.input}
        returnKeyType="search"
        autoCorrect={false}
        autoCapitalize="none"
      />

      {value?.length ? (
        <Pressable onPress={onClear}>
          <FontAwesome
            name="times-circle"
            size={18}
            color="#9CA3AF"
          />
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 30,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "#dddfe4ff",
    marginBottom: 4,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#111827",
  },
});

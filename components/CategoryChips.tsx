import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface Props {
  categories: string[];
  selected: string | null;
  onSelect: (category: string | null) => void;
}

export default function CategoryChips({
  categories,
  selected,
  onSelect,
}: Props) {
  return (
    <View style={styles.wrapper}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={["All", ...categories]}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => {
          const isActive =
            (item === "All" && selected === null) ||
            item === selected;

          return (
            <Pressable
              onPress={() =>
                onSelect(item === "All" ? null : item)
              }
              style={[
                styles.chip,
                isActive
                  ? styles.chipActive
                  : styles.chipInactive,
              ]}
            >
              <Text
                style={[
                  styles.chipText,
                  isActive
                    ? styles.chipTextActive
                    : styles.chipTextInactive,
                ]}
              >
                {item}
              </Text>
            </Pressable>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 14,
  },
  listContainer: {
    paddingHorizontal: 12,
  },
  chip: {
    marginRight: 8,
    paddingHorizontal: 14,
    paddingVertical: 8,
    height: 40,
    borderRadius: 999,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  chipActive: {
    backgroundColor: "#ea580c",
    borderColor: "#ea580c",
  },
  chipInactive: {
    backgroundColor: "#ffffff",
    borderColor: "#d1d5db",
  },
  chipText: {
    textTransform: "capitalize",
    fontSize: 12,
    fontWeight: "500",
  },
  chipTextActive: {
    color: "#ffffff",
  },
  chipTextInactive: {
    color: "#374151",
  },
});

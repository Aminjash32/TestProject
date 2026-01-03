import { SortOption } from "@/src/types/fitlerOptions";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface Props {
  selected: SortOption | null;
  onSelect: (sort: SortOption) => void;
  onClear: () => void;
}

export default function SortBar({
  selected,
  onSelect,
  onClear,
}: Props) {
  const options: { label: string; value: SortOption }[] = [
    { label: "Low to High", value: "PRICE_LOW_HIGH" },
    { label: "High to Low", value: "PRICE_HIGH_LOW" },
    { label: "A–Z", value: "NAME_A_Z" },
    { label: "Z–A", value: "NAME_Z_A" },
  ];

  return (
    <View style={styles.container}>
      {/* Sort options */}
      <View style={styles.left}>

        {options.map((opt) => {
          const isActive = selected === opt.value;

          return (
            <Pressable
              key={opt.value}
              onPress={() => onSelect(opt.value)}
              style={[
                styles.chip,
                isActive && styles.chipActive,
              ]}
            >
              <Text
                style={[
                  styles.text,
                  isActive && styles.textActive,
                ]}
              >
                {opt.label}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {/* Clear button */}
      {selected && (
        <Pressable
          onPress={onClear}
          style={styles.clearButton}
        >
          <FontAwesome
            name="times-circle"
            size={14}
            color="#6B7280"
          />
          <Text style={styles.clearText}>
            Clear
          </Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 6,
    justifyContent: "space-between",
  },
  left: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    flex: 1,
  },
  icon: {
    marginRight: 8,
  },
  chip: {
    marginRight: 8,
    marginBottom: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#d1d5db",
  },
  chipActive: {
    backgroundColor: "#111827",
    borderColor: "#111827",
  },
  text: {
    fontSize: 12,
    fontWeight: "500",
    color: "#374151",
  },
  textActive: {
    color: "#ffffff",
  },
  clearButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 2,
  },
  clearText: {
    marginLeft: 4,
    fontSize: 12,
    fontWeight: "500",
    color: "#6B7280",
  },
});

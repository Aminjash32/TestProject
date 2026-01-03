import Colors from '@/constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>

      <View style={styles.iconWrapper}>
        <FontAwesome
          name="shopping-cart"
          size={48}
          color={Colors.light.tabIconDefault}
        />
      </View>

      <Text style={styles.title}>Welcome</Text>

      <Text style={styles.subtitle}>
        Browse products and find what you love
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },

  iconWrapper: {
    height: 100,
    width: 100,
    borderRadius: 999,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: '600',
    color: '#111827', 
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 14,
    color: '#6b7280', 
    textAlign: 'center',
    lineHeight: 20,
  },
});

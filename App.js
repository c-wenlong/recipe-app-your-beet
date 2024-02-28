import { StyleSheet, Text, View } from "react-native";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <View style={styles.container}>
      <HomePage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    padding: 20,
  },
});

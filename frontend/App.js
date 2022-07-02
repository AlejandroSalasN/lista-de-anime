import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Card from "./components/card";

export default function App() {
  return (
    <View style={styles.container}>
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10
  },
  containero: {
    width: 200,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    width: 50,
    height: 20,
    backgroundColor: "#9f9c9c",
    alignItems: 'center',
    justifyContent: 'center'
  },
});

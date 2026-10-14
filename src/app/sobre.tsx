import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text>Contaê App</Text>
      <Link href="/" style={styles.button}>Home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#c44545",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#FFFFFF",
  },
});

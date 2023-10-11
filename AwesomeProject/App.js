import { StatusBar } from "expo-status-bar";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.whiteinator}>00 : 00</Text>
      {/* <Button title="START" color={"red"} />
      <Button title="PRESS ME" color={"blue"} /> */}
      <Pressable style={styles.startStopButton}>
        <Text style={styles.startStopText}>START</Text>
      </Pressable>
      <StatusBar style="auto" backgroundColor="#ffffff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020936",
    alignItems: "center",
    justifyContent: "center",
  },
  whiteinator: {
    color: "white",
    fontSize: 30,
  },
  startStopButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "red",
  },
  startStopText: {
    color: "#020936",
    fontSize: 20,
  },
});

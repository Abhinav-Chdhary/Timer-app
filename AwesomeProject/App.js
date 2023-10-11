import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [Time, setTime] = useState(0);
  const updateTime = () => {
    setTime(Time + 1);
  };
  const resetTime = () => {
    setTime(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.whiteinator}>{Time}</Text>
      {/* <Button title="START" color={"red"} />
      <Button title="PRESS ME" color={"blue"} /> */}
      <Pressable style={styles.startStopButton} onPress={updateTime}>
        <Text style={styles.startStopText}>COUNT</Text>
      </Pressable>
      <Pressable style={styles.startStopButton} onPress={resetTime}>
        <Text style={styles.startStopText}>RESET</Text>
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
    margin: 1,
  },
  startStopText: {
    color: "#020936",
    fontSize: 20,
  },
});

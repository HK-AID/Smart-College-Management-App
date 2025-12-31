import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

type RouteInfo = {
  routeName: string;
  stops: string[];
  timing: string;
};

const ROUTES: Record<string, RouteInfo> = {
  "12": {
    routeName: "Ambattur → College",
    stops: ["Ambattur", "Mogappair", "Anna Nagar", "College"],
    timing: "7:30 AM - 4:45 PM",
  },
  "18": {
    routeName: "Porur → College",
    stops: ["Porur", "Ramapuram", "Guindy", "College"],
    timing: "7:15 AM - 4:45 PM",
  },
  "25": {
    routeName: "Tambaram → College",
    stops: ["Tambaram", "Chromepet", "Guindy", "College"],
    timing: "7:00 AM - 4:45 PM",
  },
};

export default function BusRoute() {
  const [busNo, setBusNo] = useState("");
  const [result, setResult] = useState<RouteInfo | null>(null);
  const [error, setError] = useState("");

  const findRoute = () => {
    const route = ROUTES[busNo.trim()];
    if (!route) {
      setError("Bus number not found");
      setResult(null);
      return;
    }
    setError("");
    setResult(route);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bus Route</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Bus Number (e.g., 12)"
        value={busNo}
        onChangeText={setBusNo}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={findRoute}>
        <Text style={{ color: "white", fontSize: 16 }}>Check Route</Text>
      </TouchableOpacity>

      {error ? <Text style={styles.error}>{error}</Text> : null}

      {result && (
        <View style={styles.card}>
          <Text style={styles.routeName}>{result.routeName}</Text>
          <Text style={styles.label}>Stops:</Text>
          {result.stops.map((s, i) => (
            <Text key={i} style={styles.stop}>• {s}</Text>
          ))}
          <Text style={styles.timing}>Timing: {result.timing}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 26, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#1a73e8",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  error: { color: "red", textAlign: "center", marginTop: 5 },
  card: {
    marginTop: 15,
    backgroundColor: "#f2f7ff",
    padding: 15,
    borderRadius: 10,
  },
  routeName: { fontSize: 18, fontWeight: "bold", marginBottom: 8 },
  label: { fontWeight: "bold", marginTop: 6 },
  stop: { marginLeft: 6, marginTop: 2 },
  timing: { marginTop: 10, fontStyle: "italic" },
});

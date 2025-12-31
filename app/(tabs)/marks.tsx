import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Marks() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Marks & Progress</Text>

      <View style={styles.card}>
        <Text style={styles.subject}>Mathematics</Text>
        <Text style={styles.mark}>78</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.subject}>Physics</Text>
        <Text style={styles.mark}>82</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.subject}>Computer Science</Text>
        <Text style={styles.mark}>89</Text>
      </View>

      <Text style={styles.summary}>
        Overall Performance:{" "}
        <Text style={{ color: "green", fontWeight: "bold" }}>
          Improving 📈
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#e8f0fe",
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subject: {
    fontSize: 18,
  },
  mark: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1a73e8",
  },
  summary: {
    marginTop: 25,
    fontSize: 18,
    textAlign: "center",
  },
});

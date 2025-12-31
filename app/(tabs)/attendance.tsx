import { View, Text, StyleSheet } from "react-native";

export default function AttendanceScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Attendance</Text>

      <View style={styles.card}>
        <Text style={styles.subject}>Mathematics</Text>
        <Text style={styles.percent}>85%</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.subject}>Physics</Text>
        <Text style={styles.percent}>90%</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.subject}>Computer Science</Text>
        <Text style={styles.percent}>88%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#f2f2f2",
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subject: {
    fontSize: 18,
  },
  percent: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
  },
});

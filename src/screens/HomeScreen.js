import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  useWindowDimensions,
  Alert,
  StyleSheet,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  const { width } = useWindowDimensions();
  const handleLogout = () => {
    navigation.navigate("Login");
    Alert.alert("Logged out", "You have been successfully logged out");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <View>
            <EvilIcons name="navicon" size={30} color="white" />
          </View>
          <Text style={styles.headerTitle}>CMI</Text>
          <TouchableOpacity
            onPress={() => handleLogout()}
            style={styles.logoutButton}
          >
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.welcomeText}>Welcome Sourav!</Text>
          <Text style={styles.schoolName}>CMI Public School</Text>
        </View>
      </View>

      <View style={styles.gridContainer}>
        <TouchableOpacity style={[styles.gridItem, { width: width / 3 }]}>
          <View style={[styles.iconContainer, styles.blueBackground]}>
            <Ionicons name="person-outline" size={40} color="blue" />
          </View>
          <Text style={styles.gridItemText}>Student</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.gridItem, { width: width / 3 }]}>
          <View style={[styles.iconContainer, styles.redBackground]}>
            <Ionicons name="cash-outline" size={40} color="red" />
          </View>
          <Text style={styles.gridItemText}>Fees</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.gridItem, { width: width / 3 }]}>
          <View style={[styles.iconContainer, styles.greenBackground]}>
            <Ionicons name="book-outline" size={40} color="green" />
          </View>
          <Text style={styles.gridItemText}>Assignment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.gridItem, { width: width / 3 }]}>
          <View style={[styles.iconContainer, styles.orangeBackground]}>
            <Ionicons name="document-outline" size={40} color="orange" />
          </View>
          <Text style={styles.gridItemText}>Circulars</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.gridItem, { width: width / 3 }]}>
          <View style={[styles.iconContainer, styles.tealBackground]}>
            <Ionicons name="time-outline" size={40} color="teal" />
          </View>
          <Text style={styles.gridItemText}>Attendance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.gridItem, { width: width / 3 }]}>
          <View style={[styles.iconContainer, styles.violetBackground]}>
            <Ionicons name="calendar-outline" size={40} color="violet" />
          </View>
          <Text style={styles.gridItemText}>Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.gridItem, { width: width / 3 }]}>
          <View style={[styles.iconContainer, styles.indigoBackground]}>
            <FontAwesome name="table" size={40} color="indigo" />
          </View>
          <Text style={styles.gridItemText}>Exam Time Table</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.gridItem, { width: width / 3 }]}>
          <View style={[styles.iconContainer, styles.blueBackground]}>
            <FontAwesome name="table" size={40} color="blue" />
          </View>
          <Text style={styles.gridItemText}>Exam portions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.gridItem, { width: width / 3 }]}>
          <View style={[styles.iconContainer, styles.redBackground]}>
            <Ionicons name="document-outline" size={40} color="red" />
          </View>
          <Text style={styles.gridItemText}>Progress report</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.gridItem, { width: width / 3 }]}>
          <View style={[styles.iconContainer, styles.greenBackground]}>
            <FontAwesome name="table" size={40} color="green" />
          </View>
          <Text style={styles.gridItemText}>Class Time Table</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.gridItem, { width: width / 3 }]}>
          <View style={[styles.iconContainer, styles.orangeBackground]}>
            <Ionicons name="document-text-outline" size={40} color="orange" />
          </View>
          <Text style={styles.gridItemText}>Question Paper</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.gridItem, { width: width / 3 }]}>
          <View style={[styles.iconContainer, styles.tealBackground]}>
            <FontAwesome name="question-circle-o" size={40} color="teal" />
          </View>
          <Text style={styles.gridItemText}>Queries</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#3b82f6",
    flex: 1,
    padding: 16,
    paddingLeft: 24,
    justifyContent: "space-between",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    color: "white",
    flex: 1,
    marginLeft: 16,
    fontWeight: "500",
    fontSize: 18,
  },
  logoutButton: {
    backgroundColor: "white",
    padding: 8,
    borderRadius: 8,
  },
  logoutButtonText: {
    color: "#3b82f6",
    fontWeight: "500",
  },
  welcomeText: {
    fontSize: 24,
    color: "white",
    fontWeight: "500",
  },
  schoolName: {
    fontSize: 20,
    color: "white",
    fontWeight: "300",
  },
  gridContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    flex: 3,
  },
  gridItem: {
    borderColor: "#d1d5db",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  iconContainer: {
    borderRadius: 50,
    alignItems: "center",
    padding: 16,
  },
  blueBackground: {
    backgroundColor: "#bfdbfe",
  },
  redBackground: {
    backgroundColor: "#fecaca",
  },
  greenBackground: {
    backgroundColor: "#bbf7d0",
  },
  orangeBackground: {
    backgroundColor: "#fed7aa",
  },
  tealBackground: {
    backgroundColor: "#ccfbf1",
  },
  violetBackground: {
    backgroundColor: "#ede9fe",
  },
  indigoBackground: {
    backgroundColor: "#c7d2fe",
  },
  gridItemText: {
    fontSize: 16,
    marginTop: 8,
  },
});

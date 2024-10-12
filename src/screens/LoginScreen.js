import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { useRef, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function LoginScreen() {
  const firstRef = useRef(null);
  const secondRef = useRef(null);

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>EduCloud360</Text>
          <Text style={styles.subTitle}>
            Please sign in to your existing account
          </Text>
        </View>

        <View style={styles.form}>
          <View>
            <Text style={styles.inputText}>Username</Text>
            <TextInput
              style={styles.inputField}
              value={formData.username}
              onChangeText={(value) => handleChange("username", value)}
              placeholder="username"
              autoCapitalize="none"
              autoCorrect={false}
              maxLength={16}
              autoFocus={true}
              blurOnSubmit={false}
              ref={firstRef}
              onSubmitEditing={(e) => {
                const text = e.nativeEvent.text;
                if (!text) return;
                secondRef.current.focus();
              }}
            />
          </View>

          <View>
            <Text style={styles.inputText}>Password</Text>
            <View>
              <TextInput
                style={styles.inputField}
                value={formData.password}
                onChangeText={(value) => handleChange("password", value)}
                placeholder="********"
                autoCapitalize="none"
                secureTextEntry={!showPassword}
                maxLength={20}
                ref={secondRef}
              />
              <TouchableOpacity
                style={styles.eyeBtn}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Ionicons
                  name={showPassword ? "eye" : "eye-off"}
                  size={25}
                  color="grey"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>

        <Pressable>
          <Text>
            Don't have an account? <Text style={styles.signupTxt}>Sign up</Text>
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f2f3f4",
  },
  header: {
    marginVertical: 36,
  },
  headerImg: {
    height: 100,
    width: 100,
    alignSelf: "center",
    backgroundColor: "#294C25",
    borderRadius: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitle: {
    fontSize: 17,
    textAlign: "center",
    color: "grey",
  },
  inputField: {
    height: 50,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 10,
    marginVertical: 5,
  },
  inputText: {
    fontSize: 18,
    fontWeight: "500",
  },
  errorTxt: {
    color: "red",
  },
  eyeBtn: {
    position: 'absolute',
    padding: 8,
    right: 8,
    bottom: 8,
  },
  button: {
    alignItems: "center",
    marginVertical: 15,
    backgroundColor: "red",
    height: 50,
    borderRadius: 10,
    padding: 10,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  signupTxt: {
    textDecorationLine: "underline",
    color: "red",
  },
});

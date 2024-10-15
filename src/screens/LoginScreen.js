import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  StatusBar,
  SafeAreaView,
  Alert,
} from "react-native";
import { useRef, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function LoginScreen({ navigation }) {
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

  const handleLogin = () => {
    if (formData.username === "sourav" && formData.password === "1234") {
      navigation.navigate("Home");
    } else {
      Alert.alert("Please try again", "Username or password entered is wrong.");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.headerSection}></View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Parent Login</Text>
        <Text style={styles.subTitle}>
          Please login to your existing account
        </Text>
        <View>
          <View style={styles.unameCont}>
            <Text style={styles.inputText}>Username</Text>
            <TextInput
              style={styles.inputField}
              value={formData.username}
              onChangeText={(value) => handleChange("username", value)}
              placeholder="Username"
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
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>

        <Pressable>
          <Text style={styles.signup}>
            Don't have an account? <Text style={styles.signupTxt}>Sign up</Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(96 165 250)",
  },
  headerSection: {
    flex: 1,
  },
  contentContainer: {
    flex: 4,
    padding: 24,
    backgroundColor: "#ffffff",
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
  },
  header: {
    // marginBottom: 30,
  },
  headerImg: {
    height: 100,
    width: 100,
    alignSelf: "center",
    backgroundColor: "#294C25",
    borderRadius: 50,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitle: {
    fontSize: 16,
    textAlign: "center",
    color: "grey",
    marginBottom: 30,
  },
  inputField: {
    height: 50,
    borderRadius: 10,
    backgroundColor: "#f1f5f5",
    padding: 10,
    marginVertical: 5,
  },
  unameCont: {
    marginBottom: 15,
  },
  inputText: {
    fontSize: 18,
    fontWeight: "500",
  },
  errorTxt: {
    color: "red",
  },
  eyeBtn: {
    position: "absolute",
    padding: 8,
    right: 8,
    bottom: 8,
  },
  button: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 10,
    backgroundColor: "rgb(96 165 250)",
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
  signup: {
    fontSize: 16,
  },
  signupTxt: {
    textDecorationLine: "underline",
    color: "rgb(37 99 235)",
  },
});

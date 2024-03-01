import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  ImageBackground,
  SafeAreaView,
  TextInput,
  Alert,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Text, View } from "@/components/Themed";
import { LinearGradient } from "expo-linear-gradient";

const boomerangimage = { uri: "/assets/images/boomerang.png" };

function TabLoginScreen() {
  // State management for text inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLoginPress = () => {
    // Placeholder for navigation logic
    Alert.alert("Login Pressed", "Navigate to home screen.");
  };

  const onRegisterPress = () => {
    // Placeholder for navigation logic
    Alert.alert("Register Pressed", "Navigate to registration screen.");
  };

  const onForgotPress = () => {
    // Placeholder for navigation logic
    Alert.alert("Forgot Pressed", "Navigate to Forgot screen.");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={boomerangimage}
        style={{
          width: 753,
          height: 499,
          position: "absolute",
          top: 0,
          left: -200,
        }}
        imageStyle={{
          resizeMode: "cover",
          alignSelf: "flex-end",
        }}
      ></ImageBackground>
      <SafeAreaView style={styles.safeArea}>
        <Image
          source={require("../../assets/images/logo-placeholder.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Login</Text>

        {/* Text input fields */}
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={onForgotPress}
          style={styles.registerContainer}
        >
          <Text style={styles.text}>Forgot Password</Text>
        </TouchableOpacity>

        {/* Login button */}
        <LinearGradient
          // Button Linear Gradient
          colors={["#6da798", "#40a4a9"]}
          end={{ x: 0.1, y: 0.2 }}
          style={styles.button}
        >
          <Pressable style={styles.button} onPress={onLoginPress}>
            <Text style={[styles.text, { fontWeight: "bold" }]}>{"Login"}</Text>
          </Pressable>
        </LinearGradient>
      </SafeAreaView>

      {/* Footer with Register Section */}
      <View style={styles.footer}>
        <View style={styles.registerContainer}>
          <Text style={styles.text} disabled>
            Don&apos;t have an account?{" "}
          </Text>
          <TouchableOpacity
            onPress={onRegisterPress}
            style={styles.registerContainer}
          >
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default TabLoginScreen;

const styles = StyleSheet.create({
  // Main Container
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#EEF8F7",
  },
  // Safe Area Section
  safeArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  // Title Section
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 50,
  },
  // Input Section
  input: {
    height: 40,
    width: "30%", // Control the width of the input size
    margin: 12,
    borderWidth: 1,
    padding: 10,
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    minWidth: 200,
  },
  // Text Section
  text: {
    alignSelf: "center",
  },
  // Button Section
  fixToText: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  // Footer Section
  footer: {
    paddingBottom: 20,
    alignItems: "center",
    backgroundColor: "none",
  },
  // Register Section
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "none",
  },
  // Register Text
  registerText: {
    color: "black",
    fontWeight: "bold",
  },
  // Logo
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 5,
  },
  button: {
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 4,
    paddingHorizontal: 20,
    margin: 10,
  },
});

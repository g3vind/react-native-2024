import { ImageBackground, StyleSheet, View, Image } from "react-native";
import React from "react";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/welcomeBg.png")}
    >
      {/* <Image style={styles.logo} source={require("../assets/logo.png")} /> */}
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

// StyleSheet - rnss(shortcut)
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: { width: "100%", height: 50, backgroundColor: "#fc5f65" },
  registerButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#4ecdc4",
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 60,
    alignItems: "center",
  },
});

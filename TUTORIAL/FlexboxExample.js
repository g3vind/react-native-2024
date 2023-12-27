import React from "react";
import { SafeAreaView, Platform, StatusBar } from "react-native";

export default function FlexboxExample() {
  return (
    <>
      <SafeAreaView
        style={{
          flexDirection: "row",
          marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          justifyContent: "center",
        }}
      >
        <SafeAreaView
          style={{
            height: 100,
            width: 100,
            backgroundColor: "dodgerblue",
          }}
        ></SafeAreaView>
        <SafeAreaView
          style={{
            height: 100,
            width: 100,
            backgroundColor: "red",
          }}
        ></SafeAreaView>
        <SafeAreaView
          style={{
            height: 100,
            width: 100,
            backgroundColor: "green",
          }}
        ></SafeAreaView>
      </SafeAreaView>
    </>
  );
}

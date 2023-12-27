import React from "react";
import { SafeAreaView } from "react-native";

export default function FlexboxExample() {
  return (
    <>
      <SafeAreaView
        style={{
          flex: 0.5,
          backgroundColor: "dodgerblue",
        }}
      ></SafeAreaView>
      <SafeAreaView
        style={{
          flex: 0.5,
          backgroundColor: "red",
        }}
      ></SafeAreaView>
    </>
  );
}

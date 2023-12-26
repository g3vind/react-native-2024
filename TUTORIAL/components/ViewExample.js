import { View, Text } from "react-native";
import React from "react";

export default function () {
  return (
    <View style={{ flexDirection: "row", height: 500, padding: 20 }}>
      <View style={{ backgroundColor: "blue", flex: 0.3 }}>
        <Text style={{ textAlign: "center", marginTop: 60 }}>Hi</Text>
      </View>
      <View style={{ backgroundColor: "red", flex: 0.5 }}></View>
    </View>
  );
}

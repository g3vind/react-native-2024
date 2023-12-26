import { SafeAreaView, Text, Image } from "react-native";
import React from "react";

export default function ImageExample() {
  return (
    <>
      <SafeAreaView
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 50,
        }}
      >
        <Text style={{ textAlign: "center", color: "blue" }}>
          Image Example
        </Text>
        {/* for local images */}
        <Image source={require("./assets/favicon.png")} />
        {/* for cdn images -- we've to manually set dimensions for cdn images */}
        <Image
          blurRadius={1}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </SafeAreaView>
    </>
  );
}

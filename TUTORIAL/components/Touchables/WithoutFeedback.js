import { View, Text } from "react-native";
import React from "react";

export default function WithoutFeedback() {
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
        <TouchableWithoutFeedback
          onPress={() => {
            console.log("image tapped");
          }}
        >
          <Image
            blurRadius={1}
            fadeDuration={1000}
            source={{
              width: 200,
              height: 300,
              uri: "https://picsum.photos/200/300",
            }}
          />
        </TouchableWithoutFeedback>
        {/* -------------------------TOUCHABLE OPACITY------------------------- */}

        {/* ------------------------TOUCHBALE HIGHLIGHT---------------------- */}

        {/* 1st touchable has no effect on tapping but with opacity changes opacity while tapping */}
      </SafeAreaView>
    </>
  );
}

import { TouchableHighlight, Image } from "react-native";
import React from "react";

export default function Highlight() {
  return (
    <>
      <TouchableHighlight
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
      </TouchableHighlight>
    </>
  );
}

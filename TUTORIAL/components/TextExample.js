import { SafeAreaView, Text } from "react-native";

export default function TextExample() {
  const handlePress = () => {
    console.log("Text Pressed");
  };
  return (
    <>
      <SafeAreaView>
        <Text style={{ color: "red" }} numberOfLines={1} onPress={handlePress}>
          cosicsac dsjcnsdjc csdcsncs sdacsadc c asdcsvdsvdsvds vdsjvdsv dsv
          vsdvsdvsd sdjcsiocsa csa csja
        </Text>
      </SafeAreaView>
    </>
  );
}

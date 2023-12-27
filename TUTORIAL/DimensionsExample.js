import { useDimensions } from "@react-native-community/hooks";
import { useWindowDimensions } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";

export default function DimensionsExample() {
  console.log("use window dimensions: ", useWindowDimensions()); //use window dimensions:  {"fontScale": 1.149999976158142, "height": 748.6666666666666, "scale": 3, "width": 360}
  console.log("use device orientation:", useDeviceOrientation()); // portait
  // console.log(Dimensions.get("screen"));

  const { landscape } = useDeviceOrientation();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "red",
      width: landscape ? "10%" : "100%",
      height: landscape ? "30%" : "100%",

      textAlign: "center",
      marginTop: 70,
    },
  });

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>
          Hey There! This is Govind I am from India Nice to meet you!{" "}
        </Text>
      </View>
    </SafeAreaView>
  );
}

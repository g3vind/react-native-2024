import { Alert, Button, SafeAreaView, StyleSheet } from "react-native";

export default function StylesheetEx() {
  // Stylesheet API
  //  USING STYLESHEET GIVES US ERROR FOR STYLES (if any)
  //   WE CAN PASS MANY STYLE OBJECTS IN ONE COMPONENT
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "blue",
      justifyContent: "center",
      alignItems: "center",
    },
  });

  const textStyle = StyleSheet.create({
    textSize: {
      backgroundColor: "red",
      color: "red",
    },
  });
  return (
    <>
      {/* while giving more style objects -- right object has more value than left */}
      <SafeAreaView style={[styles.container, textStyle.textSize]}>
        <Button
          title="Stylesheet Button"
          onPress={() => {
            Alert.alert("Button Cliked");
            console.log("CLICKED");
          }}
        ></Button>
      </SafeAreaView>
    </>
  );
}

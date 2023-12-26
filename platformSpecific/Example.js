import { Platform, StyleSheet, Text, View, StatusBar } from "react-native";

export default function Example() {
  // platform specific code
  const styles = StyleSheet.create({
    container: {
      textAlign: "center",
      backgroundColor: "#fff",
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
  });
  return (
    <>
      <View style={styles.container}>
        <Text>Platform Specific Code</Text>
      </View>
    </>
  );
}

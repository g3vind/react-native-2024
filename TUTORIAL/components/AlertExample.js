import { SafeAreaView, Text, Button, Alert } from "react-native";

const AlertExample = () => {
  return (
    <>
      <SafeAreaView style={{ marginTop: 80 }}>
        <Text style={{ textAlign: "center" }}>I am Button</Text>
        {/* ------------------------GIVES OPTIONS IN ALERT WITH MESSAGE------------- */}
        <Button
          color="orange"
          title="Click Me for Alert Message"
          onPress={() => {
            Alert.alert("My Title", "My Message", [
              {
                text: "Yes",
                onPress: () => {
                  console.log("Yes Cliked");
                },
              },
              {
                text: "No",
                onPress: () => {
                  console.log("No Clicked");
                },
              },
            ]);
          }}
        >
          Hi
        </Button>
        {/* --------------------ASKING PROMPT FROM USER(IOS Only)-------------------- */}
        {/* <Button
          onPress={() => {
            Alert.prompt("My Title", "My Message", (text) => {
              console.log(text);
            });
          }}
          title="Prompt"
        /> */}
      </SafeAreaView>
    </>
  );
};

export default AlertExample;

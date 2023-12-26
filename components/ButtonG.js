import { SafeAreaView, Text, Button } from "react-native";

const ButtonG = () => {
  return (
    <>
      <SafeAreaView>
        <Text style={{ textAlign: "center" }}>I am Button</Text>
        <Button
          color="orange"
          title="Click Me BC"
          onPress={() => {
            console.log("button tapped");
          }}
        >
          Hi
        </Button>
      </SafeAreaView>
    </>
  );
};

export default ButtonG;

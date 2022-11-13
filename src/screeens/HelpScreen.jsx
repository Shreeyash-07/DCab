import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

const HelpScreen = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Help</Text>
    </View>
  );
};

export default HelpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});

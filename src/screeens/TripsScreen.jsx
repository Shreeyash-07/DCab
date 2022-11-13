import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

const TripsScreen = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Trips</Text>
    </View>
  );
};

export default TripsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});

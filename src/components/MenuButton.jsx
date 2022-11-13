import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
const MenuButton = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Feather
        name="menu"
        size={35}
        color="black"
        onPress={() => navigation.toggleDrawer()}
      />
    </View>
  );
};

export default MenuButton;

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    position: "absolute",
    top: StatusBar.currentHeight * 1.5,
    left: 20,
    top: 20,
    // backgroundColor: "white",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});

import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";
import { MarkerAnimated } from "react-native-maps";
import Car from "../../assets/car.png";
const Driver = ({ uid, location }) => {
  console.log({ driverOb: location });
  return (
    <MarkerAnimated
      key={uid}
      coordinate={location}
      anchor={{ x: 0.35, y: 0.32 }}
    >
      <Image style={styles.car} source={Car} />
    </MarkerAnimated>
  );
};

export default Driver;

const styles = StyleSheet.create({
  car: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});

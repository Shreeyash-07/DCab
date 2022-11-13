import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState } from "react";
import MapView from "react-native-maps";
import MenuButton from "../components/MenuButton";
import Driver from "../components/Driver";

const fakeDriverLocations = [
  {
    uid: "driver1",
    latitude: 19.075983,
    longitude: 72.877655,
  },
  {
    uid: "driver2",
    latitude: 19.075983,
    longitude: 72.877655,
  },
  {
    uid: "driver3",
    latitude: 19.075983,
    longitude: 72.877655,
  },
];

const Homescreen = ({ navigation }) => {
  const [driverLocations] = useState(fakeDriverLocations);
  return (
    <View style={styles.container}>
      <MenuButton navigation={navigation} />
      <MapView
        initialRegion={{
          latitude: 19.075983,
          longitude: 72.877655,
          longitudeDelta: 0.045,
          latitudeDelta: 0.045,
        }}
        showsCompass={true}
        rotateEnabled={false}
        showsTraffic={true}
        showsUserLocation={true}
        showsMyLocationButton={true}
        style={styles.mapView}
      >
        {driverLocations.map((loc) => (
          <Driver
            key={loc.uid}
            uid={loc.uid}
            location={{
              latitude: loc.latitude,
              longitude: loc.longitude,
            }}
          />
        ))}
      </MapView>
      <MenuButton navigation={navigation} />
      <View style={styles.bottomWidget}>
        <View style={styles.whereContainer}>
          <Text style={styles.whereTo}>Where to?</Text>
          <Text style={styles.schedule}>Schedule</Text>
        </View>
      </View>
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapView: {
    // zIndex: 0,
    flex: 1,
  },

  bottomWidget: {
    position: "absolute",
    bottom: 0,
    // height: 100,
    width: "95%",
    backgroundColor: "white",
    zIndex: 5,
    marginHorizontal: "2.5%",
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
  },
  whereContainer: {
    margin: "2.5%",
    backgroundColor: "#f1f1f1",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "2.5%",
    paddingVertical: 8,
    marginBottom: 20,
  },
  whereTo: {
    fontSize: 19.5,
    color: "black",
  },
});

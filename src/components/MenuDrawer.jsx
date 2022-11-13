import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const Link = ({ name, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(name)}>
      <Text style={styles.link}>{name}</Text>
    </TouchableOpacity>
  );
};

const MenuDrawer = ({ state, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profile}>
        <Text style={styles.profileName}>Shreeyash Gurav</Text>
      </View>
      <ScrollView style={styles.links}>
        {state.routes.map((route) => (
          <Link key={route.key} name={route.name} navigation={navigation} />
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footertext}>Uber</Text>
        <Text style={styles.versiontext}>3.0</Text>
      </View>
    </SafeAreaView>
  );
};

export default MenuDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "black",
    height: 160,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  links: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
  link: {
    textAlign: "left",
    padding: 6,
    paddingLeft: 10,
    fontSize: 17.5,
    margin: 5,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "lightgrey",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  footertext: {
    color: "black",
  },
  versiontext: {
    color: "darkgrey",
  },
  profileName: {
    color: "white",
    fontSize: 15,
  },
  profilePic: {
    borderRadius: 50,
    height: 65,
    width: 65,
    marginRight: 10,
  },
});

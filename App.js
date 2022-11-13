import "react-native-gesture-handler";
import { StyleSheet, SafeAreaView, StatusBar, Platform } from "react-native";
import React from "react";
import Homescreen from "./src/screeens/Homescreen";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TripsScreen from "./src/screeens/TripsScreen";
import HelpScreen from "./src/screeens/HelpScreen";
import SettingsScreen from "./src/screeens/SettingsScreen";
import MenuDrawer from "./src/components/MenuDrawer";
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ExpoStatusBar style="light" backgroundColor="lightgrey"></ExpoStatusBar>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <MenuDrawer {...props} />}
          initialRouteName="Home"
        >
          <Drawer.Screen name="Home" component={Homescreen} />
          <Drawer.Screen name="Your Trips" component={TripsScreen} />
          <Drawer.Screen name="Help" component={HelpScreen} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

import React from "react";
import Feed from "../screens/Feed";
import CreateStory from "../screens/CreateStory";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      labeled={false}
      barStyle={styles.bottomStyle}
      activeColor={"#ee8249"}
      inactiveColor={"grey"}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={30}
                color={color}
                style={{ width: 30 }}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="CreateStory"
        component={CreateStory}
        options={{
          tabBarLabel: "CreateStory",
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name={focused ? "add-circle" : "add-circle-outline"}
                size={30}
                color={color}
                style={{ width: 30 }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  bottomStyle: {
    backgroundColor: "#2f345d",
    height: "8%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    overflow: "hidden",
    position: 'absolute'
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30),
  },
});












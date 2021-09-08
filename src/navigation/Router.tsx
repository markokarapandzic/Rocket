import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Import Screens
import RocketsScreen from "../screens/Rockets";
import CrewMembersStack from "./crewMembersStack";

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={"Rockets"} component={RocketsScreen} />
      <Tab.Screen name={"CrewMembers"} component={CrewMembersStack} />
    </Tab.Navigator>
  );
};

export default Router;

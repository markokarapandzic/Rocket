import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CrewMembersScreen from "../screens/CrewMembers";
import CrewMemberScreen from "../screens/CrewMember";

const Stack = createStackNavigator();

const CrewMembersStack = (): JSX.Element => {
  return (
    <Stack.Navigator initialRouteName={"CrewMembersScreen"}>
      <Stack.Screen name={"CrewMembersScreen"} component={CrewMembersScreen} />
      <Stack.Screen name={"CrewMemberScreen"} component={CrewMemberScreen} />
    </Stack.Navigator>
  );
};

export default CrewMembersStack;

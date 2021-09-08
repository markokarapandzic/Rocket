import React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import useSpaceXContext from "../../context/spaceX";
import * as RootNavigation from "../../navigation/RootNavigation";

import Card from "../../components/card";

const CrewMembers = (): JSX.Element => {
  const ctx = useSpaceXContext();

  const onPressHandler = (id: string) => {
    ctx.fetchMember(id);
    RootNavigation.navigate("CrewMemberScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {ctx?.state?.members.map((item, index) => (
          <Card
            key={index}
            onPress={onPressHandler}
            kind={"members"}
            {...item}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  scrollView: {
    flexGrow: 1,
  },
});

export default CrewMembers;

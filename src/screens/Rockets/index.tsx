import React, { useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import spaceXContext from "../../context/spaceX";

import Card from "../../components/card";

const Rockets = (): JSX.Element => {
  const context = spaceXContext();

  useEffect(() => {
    context.fetchMembers();
    context.fetchRockets();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {context?.state?.rockets.map((item, index) => (
          <Card kind="rocket" key={index} {...item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  scrollView: {
    flexGrow: 1,
  },
});

export default Rockets;

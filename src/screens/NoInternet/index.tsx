import React from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const NoInternet = () => (
  <SafeAreaView style={styles.container}>
    <Text>No Internet Connection</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NoInternet;

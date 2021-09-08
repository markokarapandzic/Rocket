import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import NetInfo from "@react-native-community/netinfo";
import Router from "./navigation/Router";
import FlashMessage from "react-native-flash-message";
import { navigationRef } from "./navigation/RootNavigation";
import ContextProvider from "./context";

import Loader from "./components/loader";
import NoInternet from "./screens/NoInternet";

const App = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    NetInfo.addEventListener((state) => setIsConnected(state.isConnected));
  }, [isConnected]);

  return (
    <NavigationContainer ref={navigationRef}>
      <View style={styles.container}>
        {isConnected ? (
          <ContextProvider>
            <Router />
          </ContextProvider>
        ) : (
          <NoInternet />
        )}
        <Loader />
        <FlashMessage position="top" />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

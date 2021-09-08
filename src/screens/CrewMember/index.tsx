import React, { useCallback, useEffect } from "react";
import { Alert, View, Platform, StyleSheet } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { openSettings, RESULTS } from "react-native-permissions";
import { usePermission, permissionStrings } from "../../services/permissions";
import useSpaceXContext from "../../context/spaceX";
import { handleError } from "../../lib/errorHandling";
import Card from "../../components/card";

const openAppSettings = async () => {
  try {
    await openSettings();
  } catch (e) {
    handleError(e.message);
  }
};

const showAlert = () =>
  Alert.alert("Give permissions", "Permissions dialog", [
    {
      text: "Give permissions",
      onPress: () => openAppSettings(),
      style: "default",
    },
  ]);

const CrewMember = () => {
  const ctx = useSpaceXContext();
  const navigation = useNavigation();

  const [cameraPermissionStatus, checkCameraPermission] = usePermission(
    permissionStrings.camera
  );
  const [galleryPermissionStatus, checkGalleryPermission] = usePermission(
    permissionStrings.gallery
  );
  const [trackingPermissionStatus, checkTrackingPermission] = usePermission(
    permissionStrings.tracking
  );

  useFocusEffect(
    useCallback(() => {
      checkCameraPermission();
      checkGalleryPermission();
      checkTrackingPermission();
    }, [navigation])
  );

  useEffect(() => {
    cameraPermissionStatus === RESULTS.BLOCKED && showAlert();
    galleryPermissionStatus === RESULTS.BLOCKED && showAlert();
    trackingPermissionStatus === RESULTS.BLOCKED && showAlert();
  }, [
    cameraPermissionStatus,
    galleryPermissionStatus,
    trackingPermissionStatus,
  ]);

  return (
    <View style={styles.container}>
      {cameraPermissionStatus === RESULTS.GRANTED &&
        galleryPermissionStatus === RESULTS.GRANTED &&
        (Platform.OS === "ios"
          ? trackingPermissionStatus === RESULTS.GRANTED
          : true) && <Card {...ctx.state.member} kind={"member"} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CrewMember;

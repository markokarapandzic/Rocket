import { useState } from "react";
import { Platform } from "react-native";
import { PERMISSIONS, RESULTS, check, request } from "react-native-permissions";

const PLATFORM_ANDROID = Platform.OS === "android";

export const permissionStrings = {
  camera: "camera",
  tracking: "tracking",
  gallery: "gallery",
};

const permissions = {
  android: {
    camera: PERMISSIONS.ANDROID.CAMERA,
    gallery: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
  },
  ios: {
    camera: PERMISSIONS.IOS.CAMERA,
    gallery: PERMISSIONS.IOS.PHOTO_LIBRARY,
    tracking: PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY,
  },
};

export const usePermission = (permission: Record<string, any>) => {
  const [permissionStatus, setPermissionStatus] = useState<string | null>(null);

  const checkPermission = async () => {
    try {
      const result = await check(
        PLATFORM_ANDROID
          ? permissions.android[permission]
          : permissions.ios[permission]
      );
      switch (result) {
        case RESULTS.UNAVAILABLE:
          setPermissionStatus(RESULTS.UNAVAILABLE);
          break;
        case RESULTS.DENIED:
          setPermissionStatus(RESULTS.DENIED);
          requestPermission();
          break;
        case RESULTS.LIMITED:
          setPermissionStatus(RESULTS.LIMITED);
          break;
        case RESULTS.GRANTED:
          setPermissionStatus(RESULTS.GRANTED);
          break;
        case RESULTS.BLOCKED:
          setPermissionStatus(RESULTS.BLOCKED);
          requestPermission();
          break;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const requestPermission = async () => {
    try {
      const result = await request(
        PLATFORM_ANDROID
          ? permissions.android[permission]
          : permissions.ios[permission]
      );
      switch (result) {
        case RESULTS.UNAVAILABLE:
          setPermissionStatus(RESULTS.UNAVAILABLE);
          break;
        case RESULTS.DENIED:
          setPermissionStatus(RESULTS.DENIED);
          break;
        case RESULTS.LIMITED:
          setPermissionStatus(RESULTS.LIMITED);
          break;
        case RESULTS.GRANTED:
          setPermissionStatus(RESULTS.GRANTED);
          break;
        case RESULTS.BLOCKED:
          setPermissionStatus(RESULTS.BLOCKED);
          break;
      }
    } catch (e) {
      console.log(e);
    }
  };

  return [permissionStatus, checkPermission];
};

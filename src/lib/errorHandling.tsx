import { showMessage } from "react-native-flash-message";

export function handleError(e: string) {
  showMessage({
    message: e.message,
    type: "danger",
  });
}

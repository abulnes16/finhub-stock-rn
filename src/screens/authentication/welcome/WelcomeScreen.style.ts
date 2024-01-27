import { StyleSheet } from "react-native";
import { Spacing } from "@theme/spacing"

export const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    alignSelf: "center"
  },
  loginButton: {
    minWidth: "60%",
    marginVertical: Spacing.md,
  }
})
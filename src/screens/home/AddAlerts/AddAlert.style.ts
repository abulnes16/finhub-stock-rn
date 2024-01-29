import { Spacing } from "@theme/spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    paddingHorizontal: Spacing.lg,
    marginVertical: Spacing.xl
  },
  verticalSpacing: {
    marginVertical: Spacing.md,
  },
  formContainer: {
    padding: Spacing.lg
  },
  goBack: {
    maxWidth: 50,
  },
  backIcon: {
    width: 40,
    height: 40,
  }
})
import { Spacing } from "@theme/spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center"
  },
  goBack: {
    maxWidth: 50,
    position: "absolute",
    top: 0,
    left: 0,
  },
  backIcon: {
    width: 40,
    height: 40,
  },

  title: {
    textAlign: "center",
    marginVertical: Spacing.md
  },
  chart: {
    marginVertical: Spacing.lg
  },

  spinnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  emptyChartText: {
    maxWidth: 200,
  }
})
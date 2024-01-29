import { Spacing } from "@theme/spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  image: {
    width: 250,
    height: 250,
    alignSelf: "center",
  },
  centered: {
    textAlign: "center",
    marginVertical: Spacing.sm,
  },
  subtitle: {
    maxWidth: 300,
    flexWrap: "wrap",
    alignSelf: "center",
  }
})
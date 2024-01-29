import { Spacing } from "@theme/spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  itemContainer: {
    marginHorizontal: Spacing.md,
    marginVertical: Spacing.xs
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  removeButton: {
    width: 25,
    height: 25,
    borderRadius: 100
  },

})
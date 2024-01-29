import { Spacing } from "@theme/spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  item: {
    margin: Spacing.md
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  marginalChangeContainer: {
    marginTop: Spacing.md,
    flexDirection: "row",
    alignItems: "center",
  },
  stockVolumeIcon: {
    width: 25,
    height: 25,
    marginRight: Spacing.sm
  }
})
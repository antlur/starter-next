import fs from "fs";
import path from "path";
import { getColors } from "theme-colors";
import { storageDir } from "./config.ts";

export function themeColors(website: any) {
  const theme = website.theme;
  const primaryColor = theme.primary;
  const secondaryColor = theme.secondary;
  const tertiaryColor = theme.tertiary;

  const colors: any = {};

  if (primaryColor) {
    colors["primary"] = {
      DEFAULT: primaryColor,
      ...getColors(primaryColor),
    };
    colors["onPrimary"] = theme.colors.primaryForeground;
  }

  if (secondaryColor) {
    colors["secondary"] = {
      DEFAULT: secondaryColor,
      ...getColors(secondaryColor),
    };
    colors["onSecondary"] = theme.colors.secondaryForeground;
  }

  if (tertiaryColor) {
    colors["tertiary"] = {
      DEFAULT: tertiaryColor,
      ...getColors(tertiaryColor),
    };
    colors["onTertiary"] = theme.colors.tertiaryForeground;
  }

  const filepath = path.join(storageDir, "colors.json");

  fs.writeFileSync(filepath, JSON.stringify(colors, null, 4));
}

import fs from "fs";
import path from "path";
import { storageDir } from "./config.ts";

export function fontFamilies(website: any) {
  const fontFamilies = website.font_families ?? [];

  // convert array of objects to key value pairs where name is the key
  const fontFamiliesMap = fontFamilies.reduce((acc: any, curr: any) => {
    acc[curr.name] = curr.value;
    return acc;
  }, {});

  const filepath = path.join(storageDir, "font-families.json");

  fs.writeFileSync(filepath, JSON.stringify(fontFamiliesMap, null, 4));
}

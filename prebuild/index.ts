import "dotenv/config";
import { BackstageClient } from "@antlur/backstage";

export const client = new BackstageClient({
  baseURL: "https://bckstg.app/api",
  accountId: process.env.BACKSTAGE_ACCOUNT_ID,
  token: process.env.BACKSTAGE_API_KEY,
});

import { generateFavicons } from "./generate-favicons.ts";
import { themeColors } from "./theme-colors.ts";
import { fontFamilies } from "./font-families.ts";
import { generateRedirects } from "./redirects.ts";

async function run() {
  const website = await client.website.getWebsite();

  if (!website) {
    console.log("No website found");
    return;
  }

  generateFavicons(website);
  themeColors(website);
  fontFamilies(website);
  generateRedirects(website);
}

run();

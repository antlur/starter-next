import { BackstageClient } from "@antlur/backstage";

export const client = new BackstageClient({
  baseURL: "https://bckstg.app/api",
  accountId: process.env.BACKSTAGE_ACCOUNT_ID,
  token: process.env.BACKSTAGE_API_KEY,
});

import { generateFavicons } from "./generate-favicons";
import { themeColors } from "./theme-colors";
import { fontFamilies } from "./font-families";
import { generateRedirects } from "./redirects";

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

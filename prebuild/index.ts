import "dotenv/config";
import { BackstageClient } from "@antlur/backstage";

/**
 * Prebuild Backstage Client
 * Uses the same base URL and credentials as the runtime client
 * but doesn't import the full config to avoid ESM resolution issues
 * with layouts/blocks during prebuild
 */
export const client = new BackstageClient({
  baseURL: process.env.BACKSTAGE_BASE_URL || "https://bckstg.app/api",
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

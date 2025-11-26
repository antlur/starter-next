import { defineConfig } from "@antlur/backstage";

import defaultLayout from "./layouts/default";

import hero from "./blocks/hero";

/**
 * Backstage CMS Configuration
 * This config is shared between runtime and prebuild scripts
 * 
 * Environment variables required:
 * - BACKSTAGE_ACCOUNT_ID: Your Backstage account ID
 * - BACKSTAGE_API_KEY: Your Backstage API key
 */
export default defineConfig({
  baseURL: process.env.BACKSTAGE_BASE_URL || "https://bckstg.app/api",
  accountId: process.env.BACKSTAGE_ACCOUNT_ID,
  token: process.env.BACKSTAGE_API_KEY,
  layouts: [defaultLayout],
  blocks: [hero],
});

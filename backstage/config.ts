import { defineConfig } from "@antlur/backstage";

import defaultLayout from "./layouts/default";

import hero from "./blocks/hero";

export default defineConfig({
  // baseURL: "https://backstage.test/api",
  accountId: process.env.BACKSTAGE_ACCOUNT_ID,
  token: process.env.BACKSTAGE_API_KEY,
  layouts: [defaultLayout],
  blocks: [hero],
});

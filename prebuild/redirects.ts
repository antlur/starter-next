import type { Website } from "@antlur/backstage";
import { existsSync, copyFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function generateRedirects(website: Website) {
  // check if file exists in ./redirects/{website.domain}
  // if it does, copy it to ./public/_redirects

  const redirectsPath = path.join(__dirname, "redirects", website.domain);

  if (!existsSync(redirectsPath)) {
    console.log(`No redirects found for ${website.domain}`);
    return;
  }

  const publicRedirectsPath = path.join(process.cwd(), "public", "_redirects");
  copyFileSync(redirectsPath, publicRedirectsPath);
}

import https from "https";
import fs from "fs";
import path from "path";

export async function generateFavicons(website: any) {
  if (website.favicon_url) {
    saveIcon(website.favicon_url);
  }

  if (website.apple_icon_url) {
    saveIcon(website.apple_icon_url, "apple-icon");
  }
}

function saveIcon(url: string, type: "icon" | "apple-icon" = "icon") {
  const filename = path.basename(url);
  const extension = path.extname(filename);
  const iconFilename = type + extension;
  const iconFilepath = path.join(process.cwd(), "src/app/", iconFilename);

  const file = fs.createWriteStream(iconFilepath);

  https.get(url, function (response) {
    response.pipe(file);

    file.on("finish", async () => {
      console.log("Download " + type);
      file.close();
    });
  });
}

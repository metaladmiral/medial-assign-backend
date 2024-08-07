import axios from "axios";
import fs from "fs";
import { Buffer } from "buffer";
import { ogImageData } from "../../types";

async function createOgImage(ogImageData: ogImageData, uuid: string) {
  try {
    const ogImageFormData = new URLSearchParams(ogImageData);
    const og_img = await axios.post(
      process.env.SERVER_URL + "/v1/generate-og-image",
      ogImageFormData,
      {
        responseType: "arraybuffer",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );
    const buffer = Buffer.from(og_img.data, "binary");

    const imagePath = "./public/og-images/" + uuid + ".jpg";
    const writer = fs.createWriteStream(imagePath);
    writer.write(buffer);
    writer.end();

    return 1;
  } catch (err) {
    throw err;
  }
}

export default createOgImage;

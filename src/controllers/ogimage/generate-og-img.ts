import { Response, Request, query } from "express";
import Handlebars from "handlebars";
import puppeteer from "puppeteer";
import { templateHTML, templateStyles } from "./og-img-template";

function getFontSize(title = "") {
  if (!title || typeof title !== "string") return "";
  const titleLength = title.length;
  if (titleLength > 55) return "1.75rem";
  if (titleLength > 35) return "2.75rem";
  if (titleLength > 25) return "3.75rem";
  return "4.75rem";
}

async function generateOgImage(req: Request, res: Response) {
  const postData = req.body;
  const serverURL = process.env.SERVER_URL;
  const publicImgURL = serverURL + "/public/uploads/" + postData.img;

  const compiledStyles = Handlebars.compile(templateStyles)({
    fontSize: getFontSize(postData.title as string),
  });
  const compiledHTML = Handlebars.compile(templateHTML)({
    title: postData.title,
    content: postData.content,
    img: publicImgURL,
    styles: compiledStyles,
  });
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--no-sandbox"],
    defaultViewport: {
      width: 1200,
      height: 630,
    },
  });
  const page = await browser.newPage();
  await page.setContent(compiledHTML, { waitUntil: "domcontentloaded" });
  await page.evaluate(async () => {
    const selectors = Array.from(document.querySelectorAll("img"));
    await Promise.all([
      document.fonts.ready,
      ...selectors.map((img) => {
        if (img.complete) {
          if (img.naturalHeight !== 0) return;
          throw new Error("Image failed to load");
        }
        return new Promise((resolve, reject) => {
          img.addEventListener("load", resolve);
          img.addEventListener("error", reject);
        });
      }),
    ]);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  });

  const element = await page.$("#body");

  if (element === undefined || element === null) {
    console.log("error");
    return res.send(500);
  }
  const image = await element.screenshot({ omitBackground: true });
  await browser.close();

  res.writeHead(200, {
    "Content-Type": "image/png",
  });
  res.end(image);
}

export default generateOgImage;

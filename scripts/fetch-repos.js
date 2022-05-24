import fetch from "cross-fetch";
import * as cheerio from "cheerio";
import { writeFile } from "fs";

const targetUrl = "https://github.com/vsouza/awesome-ios";

(async function main() {
  const res = await fetch(targetUrl);
  const html = await res.text();

  const $ = cheerio.load(html);
  let links = [];
  $("article a").each((i, ele) => {
    const link = ele.attribs["href"];

    if (link.startsWith(targetUrl)) {
      return null;
    }

    if (link.startsWith("https://github.com" || link.startsWith("https://www.github.com"))) {
      links.push(link);
    }

    return null;
  });
  links = links.filter((link) => link !== null);
  console.log("Found github links:", links.length);

  console.log("Writing to cocoa-libraries.json ...");
  const json = JSON.stringify(
    links.map((link) => ({ githubUrl: link })),
    null,
    2
  );

  await writeFile("./cocoa-libraries.json", json, (error) => {
    console.log(error);
  });
})();

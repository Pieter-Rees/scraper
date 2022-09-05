const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();

const site = "https://www.nu.nl/";

try {
  axios(site).then(res => {
    const data = res.data;
    const $ = cheerio.load(data);

    let content = [];

    $(".list__item--thumb", data).each(function () {
      const title = $(this).text();
      const anchor = $(this).find("a").attr("href");

      content.push({
        title,
        anchor,
      });

      app.get("/", (req, res) => {
        res.json(content);
      });
    });
  });
} catch (error) {
  console.log(error, error.message);
}

app.listen(3000, () => {
  console.log(`server is running on PORT:3000`);
});

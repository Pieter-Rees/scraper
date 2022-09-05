const express = require("express");
const path = require("path");

const axios = require("axios");
const cheerio = require("cheerio");
var http = require("http");
var fs = require("fs");

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
    });
    console.log(content);
  });
} catch (error) {
  console.log(error, error.message);
}

app.listen(3000, content => {
  console.log(`server is running on PORT:3000`);
});

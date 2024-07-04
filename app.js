const validUrl = require("valid-url");
const shortId = require("shortid");
const { log } = require("console");
const fs = require("fs");
const dbUrl = "tmp/db.json";
const express = require("express");
const app = express();
const port = 3000;
const apiUrl = "http://127.0.0.1:3000";

app.use(express.json());

let urls = {};

fs.readFile(dbUrl, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  urls = JSON.parse(data);
});

app.post("/shorten", (req, res) => {
  const { url } = req.body;

  if (!validUrl.isUri(url)) {
    res.status(400).end();
  }

  const shortcode = shortId.generate();
  urls[shortcode] = url;

  fs.writeFile(dbUrl, JSON.stringify(urls), (err) => {
    if (err) {
      console.error(err);
    }
  });

  res.json({
    shortcode,
    redirect: `${apiUrl}/${shortcode}`,
  });
});

app.get("/:shortcode", (req, res) => {
  const shortcode = req.params.shortcode;

  if (!(shortcode in urls)) {
    res.status(404).end();
  }

  res.redirect(urls[shortcode]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

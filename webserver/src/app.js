const express = require("express");
const path = require("path");

const app = express();

console.log(__dirname);
console.log(__filename);

const publicDirectoryPath = path.join(__dirname, "../public");
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.send([
    {
      name: "andrew",
    },
    {
      name: "gunjan ",
    },
  ]);
});

app.get("/help", (req, res) => {
  res.send('<a href="about">click</a>');
});

app.get("/weather", (req, res) => {
  res.send({
    name: "usha",
  });
});

app.get("/about", (req, res) => {
  res.send("about page here");
});
//app.com
//app.com/help
//app.com/about

app.listen(3000, () => {
  console.log("server start at port 3000");
});

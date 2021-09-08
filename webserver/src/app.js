const express = require("express");
const path = require("path");
const { help } = require("yargs");

const app = express();

console.log(__dirname);
console.log(__filename);

const publicDirectoryPath = path.join(__dirname, "../public");
// app.use(express.static(publicDirectoryPath));
app.set("view engine", "hbs");
// app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
  res.render("index", { title: "home from hbs", name: "server" });
});

app.get("/help", (req, res) => {
  res.render("help");
});

// this will be used for sending json formatting data in the front end.
// app.get("/weather", (req, res) => {
//   res.send({
//     name: "usha",
//   });
// });

app.get("/about", (req, res) => {
  res.render("about", { title: "about|maker", name: "about section" });
});
//app.com
//app.com/help
//app.com/about

app.listen(3000, () => {
  console.log("server start at port 3000");
});

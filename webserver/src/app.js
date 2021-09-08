// for better way to handel the request me can use header partial

const express = require("express");
const path = require("path");
const { help } = require("yargs");
const hbs = require("hbs");

const app = express();

console.log(__dirname);
console.log(__filename);

// for header partial we are using the advance templating.
const partialsPath = path.join(__dirname, "../templating/partial");

// const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templating/views");
// app.use(express.static(publicDirectoryPath));
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);
app.get("/", (req, res) => {
  res.render("index", { title: "home from hbs", name: "server" });
});

app.get("/help", (req, res) => {
  res.render("help", { title: "about|maker" });
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

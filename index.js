import express from "express";
import bodyParser from "body-parser";

const port = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

function getDate() {
  let dayNum = new Date().getDay();
  let monthNum = new Date().getMonth();
  let dateNum = new Date().getDate();
  const dateText = weekday[dayNum] + ", " + month[monthNum] + " " + dateNum;
  return dateText;
}

app.get("/", (req, res) => {
  let dateText = getDate();
  res.render("index.ejs", { dateText: dateText, items: listItems });
});

app.post("/submit", (req, res) => {
  let dateText = getDate();
  console.log("submitted");
  let text = req.body.newItemText;
  listItems.push(text);
  res.render("index.ejs", { dateText: dateText, items: listItems });
});

app.listen(port, () => {
  console.log("Server started on port 3000");
});

let listItems = [];

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

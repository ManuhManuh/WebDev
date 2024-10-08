import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

var totalLetters = 0;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const data = {
    title: "Enter your first and last name"
  };
  res.render("index.ejs", data);
});

app.post("/submit", (req, res) => {
  totalLetters = req.body.fName.length + req.body.lName.length;
  const data = {
    title: "Your name has " + totalLetters + " letters!"
  };
  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
var greetText = "";
const port = 3000;

function getGreetText(req, res, next){
    const d = new Date();
    const dayNum = d.getDay();

    if(dayNum == 0 || dayNum == 6) {
        greetText = "Hey! It's a weekend, it's time to have fun!"
    } else {
        greetText = "Hey! It's a workday, it's time to work hard!"
    };

    next();
}

app.use(getGreetText);

app.get("/", (req, res) => {
    console.log(greetText);
    res.render(__dirname + "/views/index.ejs", { greeting: greetText });
  });

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
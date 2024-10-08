import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const blogTitles = [];
const blogBodies = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
  });

app.get("/edit", (req, res) => {
  console.log ("get edit route accessed");
  const submit = req.body.submit;
  const blogIndex = blogTitles.findIndex(req.body.submit);
  res.render("index.ejs", { blogText: blogBodies[blogIndex] });
});

app.post("/submit", (req, res) => {
    console.log ("submit route accessed");
    blogTitles.push(req.body.postTitle);
    blogBodies.push(req.body.postText);
    res.render("index.ejs", { blogList: blogTitles });
  });

app.patch("/edit", (req, res) => {
  console.log ("Patch edit route accessed");
    const blogPost = req.body.postContent;
    res.render("blog.ejs", { postText: blogPost });
  });

app.delete("/remove", (req, res) => {
    const blogPost = req.body.postContent;
    res.render("blog.ejs", { postText: blogPost });
  });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
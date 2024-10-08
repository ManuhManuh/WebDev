import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) =>{
    res.send("<h1>Home Page Glory</h1>");
});

app.get("/contact", (req, res) =>{
    res.send("<h1>Semaphore preferred!</h1>");
});

app.get("/about", (req, res) =>{
    res.send("<h1>I am apparently a person who pisses off her cat.  For no reason.</h1>");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
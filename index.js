import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const posts = [
  
];

app.get("/", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/blogpost", (req, res) => {
  res.render("blogpost.ejs");
});

app.get("/:postName", (req, res) => {
  const postName = req.params.postName;
  const post = posts.find(p => p.postName === postName);
  res.render("postcontent.ejs", { post });
});

app.post("/", (req, res) => {
  const postName = req.body["title"] || "";
  const postData = req.body["post"] || "";
  const postAuthor = req.body["name"] || "";
  const post = { postName, postData, postAuthor };
  posts.push(post);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

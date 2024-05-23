import express, { json } from "express";
import bodyparser from "body-parser";
import { engine } from "express-handlebars";
import mongoose from "mongoose";
import { renderHBS } from "./src/header.js";
import Player from "./src/models.js";
import getRandomWord from "./src/SecretWords.js";

mongoose.connect(process.env.DB_URL);

const app = express();

app.use(bodyparser.json());
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "templates");

app.get("/", async (req, res) => {
  renderHBS(res, "wordle");
});
app.get("/about", async (req, res) => {
  renderHBS(res, "about");
});

app.get("/highscore", async (req, res) => {
  const data = await Player.find().sort({ timeTaken: 1 });
  // console.log(data);
  res.render("highscore", { data: data.map((doc) => doc.toObject()) });
});

app.get("/api/word/:length", async (req, res) => {
  const length = parseInt(req.params.length);
  res.send(getRandomWord(length));
});

// här skickar vi data till databas
app.post("/api/mongSkicka2", async (request, response) => {
  const skickadData = request.body;
  const newPlayer = new Player(skickadData);
  await newPlayer.save();
  response.json("värde har kommit fram");
});

app.use(express.static("./static"));

app.listen(5080);
console.log("Server is up and running");

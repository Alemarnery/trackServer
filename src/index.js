require("./models/User");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(bodyParser.json());
app.use(authRoutes);

const dbname = "socialDb";
const userName = "alem_social";
const password = "DJKX3MaltuxYYYyn";
const MONGO_URI = `mongodb+srv://${userName}:${password}@cluster0.ll51q.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});

mongoose.connection.on("error", (err) => {
  console.error("Error conecting to mongo", err);
});

app.get("/", (req, res) => {
  res.send("Hi there!");
});

app.listenerCount(3000, () => {
  console.log("Listening on 3000");
});

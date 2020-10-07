import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import mongoMessage from "./messageModule.js";
import dotenv from "dotenv";

// Setup
dotenv.config({ path: "./config.env" });
const app = express();
const port = process.env.PORT || 9000;
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

// Middleware
app.use(express.json());
app.use(cors());

// Connection to database
mongoose.connect(DB, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => console.log("DB Connected"));

//Routes
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});
app.post("/submit", (req, res) => {
  const dbMessage = req.body;
  mongoMessage.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// Listen
app.listen(port, () => console.log(`App is listening on localhost: ${port}`));

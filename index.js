import express from "express";
import tweetsRoute from "./tweets/tweets";

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});

app.post("/", (req, res) => {
  return res.json({ message: "Hello world for post method" });
});

app.use("/tweets", tweetsRoute);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});

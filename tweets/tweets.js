import express from "express";
import data from "./data";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ tweets: data.tweetData });
});

router.post("/", (req, res) => {
  const request = req.body;
  data.addTweet(request);
  res.sendStatus(201);
});

export default router;

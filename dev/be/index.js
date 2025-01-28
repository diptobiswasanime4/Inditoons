import express from "express";
import { PORT } from "./api/config.js";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ msg: "API health is ok ok", success: true });
});

app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}`);
});

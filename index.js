const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const server = express();
const port = process.env.PORT || 9000;

server.use(cors());
server.use(express.json());

server.use("/api/*", (_, res) => {
  res.json({ data: "The api lives!!" });
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

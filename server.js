const express = require("express");
const cors = require("cors");

require("dotenv").config();

const PORT = 3000;
const app = express();
app.use(cors());
app.listen(PORT, () => `app is running on port${PORT}`);

const data = require("./data/weather.json");
app.get("/", (req, res) => {
  response.json("weather");
});

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { dbConnection } = require("./database/config");
const router = require("./routes");

const app = express();

dbConnection();

app.use(cors());

app.use(express.json());

app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

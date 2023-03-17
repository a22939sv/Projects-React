const express = require("express");

const app = express();

require("dotenv").config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const router = require("./routes/router");

app.use("/api/v1", router);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

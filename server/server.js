const express = require("express");
const path = require("path");
const PORT = 1235;
const { runML } = require("./src/utils/ml");

const app = express();

app.use(express.static(path.join(__dirname, "/public")));

app.post("/prediction", async (req, res) => {
  console.log(res.body);

  console.log(await runML());
  res.json({ cat: "true" });
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});

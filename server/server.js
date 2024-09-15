const express = require("express");
const path = require("path");
const PORT = 1235;
const { runML } = require("./src/utils/ml");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, "/public")));

app.post("/prediction", async (req, res) => {
  console.log("received payload: ",req.body);

  const prediction = await runML(req.body);

  res.json({ prediction: prediction });
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});

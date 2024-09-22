const express = require("express");
const path = require("path");
const PORT = 1235;
const { runML } = require("./src/utils/ml");
const { authMiddleware } = require("./src/middleware/authMiddleware");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, "/public")));

const JWT_SECRET = 'daniel-jake';

app.post("/prediction", authMiddleware, async (req, res) => {
  console.log("received payload: ",req.body);

  const prediction = await runML(req.body);

  res.json({ prediction: prediction });
});

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  
  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Store user with hashed password
  users.push({ username, password: hashedPassword });
  
  res.status(201).send('User registered');
});

// Route to login and generate a JWT
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  // Find user
  const user = users.find(user => user.username === username);
  if (!user) {
      return res.status(400).send('User not found');
  }

  // Compare password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
      return res.status(401).send('Invalid password');
  }

  // Generate JWT
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '6h' });
  
  res.json({ token });
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});

const express = require("express");
const path = require("path");
const PORT = 1235;
const { runML } = require("./src/utils/ml");
const { authMiddleware } = require("./src/middleware/authMiddleware");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { db } = require('./src/db/connection')

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
  const { email, password, firstName, lastName } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into the database
    const query = 'INSERT INTO users (email, password, firstName, lastName) VALUES (?, ?, ?, ?)';
    db.query(query, [email, hashedPassword, firstName, lastName], (err, _) => {
      if (err) {
        console.error('Error inserting users into the database:', err);
        return res.status(500).send('Server error');
      }
      res.status(201).send('User registered successfully');
    });
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Route to login and generate a JWT
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Find user in the database
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], async (err, result) => {
    if (err) {
      console.error('Error fetching users from database:', err);
      return res.status(500).send('Server error');
    }

    // Check if the user exists
    if (result.length === 0) {
      return res.status(400).send('Users not found');
    }

    const user = result[0];

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send('Invalid password');
    }

    // Generate JWT (token expires in 6 hours)
    const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '6h' });

    res.json({ token });
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});

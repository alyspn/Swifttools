const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const bcrypt = require('bcrypt');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/swifttools', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB database');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

// User Schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  // Add other fields as needed
});

const User = mongoose.model('User', userSchema);

const buildPath = path.join(__dirname, '..', '/swifttools/build');
app.use(express.static(buildPath));

// Redirect all requests to your React app's home page
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// Signup Route
app.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user with hashed password
    const newUser = new User({ email, password: hashedPassword });
    
    await newUser.save();
    res.status(201).json({ message: "Utilisateur créé avec succes!" });
  } catch (error) {
    res.status(500).json({ message: "Erreur avec la création d'utilisateur." });
  }
});

// Test Database Route
app.get('/testdb', async (req, res) => {
  try {
    const testUser = new User({ email: 'test@test.com', password: 'test123' });
    await testUser.save();
    res.send('Test user successfully added to MongoDB');
  } catch (error) {
    res.status(500).send('Error adding test user: ' + error.message);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

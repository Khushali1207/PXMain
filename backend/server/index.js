const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection (Atlas ka URL yahan dalo)
mongoose.connect('mongodb+srv://PXadmin:PXadmin@px.nerxnpu.mongodb.net/?appName=PX');

const WaitlistSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  date: { type: Date, default: Date.now }
});

const Waitlist = mongoose.model('Waitlist', WaitlistSchema);

app.post('/api/notify', async (req, res) => {
  try {
    const entry = new Waitlist({ email: req.body.email });
    await entry.save();
    res.status(200).json({ message: "Added to waitlist!" });
  } catch (err) {
    res.status(400).json({ error: "Email already exists or invalid." });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
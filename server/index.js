const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/resume', require('./routes/resumeRoutes'));

app.get('/', (req, res) => {
  res.send('Resume Builder API is running...');
});

// 👇 THIS MUST BE PRESENT
app.use('/api/users', require('./routes/userRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

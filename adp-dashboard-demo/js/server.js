// server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Simulated API endpoint with dummy data
app.get('/api/data', (req, res) => {
  res.json([
    { label: 'January', value: 50 },
    { label: 'February', value: 75 },
    { label: 'March', value: 150 },
    { label: 'April', value: 100 },
  ]);
});

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
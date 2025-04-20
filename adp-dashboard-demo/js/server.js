// server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Simulated API endpoint with dummy data
app.get('/api/data', (req, res) => {
  res.json({
    labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6'],
    values1: [0, 60, 85, 90, 100, 100],
    values2: [0, 50, 70, 80, 90, 100],
    barLabels: ['Toll Brother Luxury Homes Inc | 2009-2014', 'J.W. Pepper | 2014-2020', 'Synopsys Inc | 2021-2025'],
    barValues: [5, 6, 4],
    circleLabels: ['UX/UX Design', 'HTML', 'CSS', 'JavaScript'],
    circleValues: [5, 5, 5, 5],
  });
});

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});1234

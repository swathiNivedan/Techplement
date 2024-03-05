const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/calculatorDB', { useNewUrlParser: true, useUnifiedTopology: true });

const historySchema = new mongoose.Schema({
  expression: String,
  result: String
});

const HistoryItem = mongoose.model('HistoryItem', historySchema);

app.get('/api/history', async (req, res) => {
  try {
    const history = await HistoryItem.find();
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const express = require('express');
const cors = require('cors');

const app = express();
const path = require('path');

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../dist')));

const mainPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
};

app.get('*', mainPage);
app.get('/', mainPage);

app.post('/contact', (req, res) => {
  const { name, message } = req.body;
  console.log(name, message);
  res.json({ status: 'ok' });
});

app.listen(5000, () => console.log('Server started on port http://localhost:5000/'));
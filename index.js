const path = require('path');
const express = require('express');
const app = express();
app.use(express.static(path.resolve(__dirname, 'build')));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});
app.listen(4400, () => {
  console.log(`Server listening on 44000`);
});
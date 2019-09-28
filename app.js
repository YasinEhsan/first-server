const express = require('express');
const app = express();
const PORT = 8000;


// app.METHOD(PATH, SOURCE)
app.get('/', (req, res) => {
  res.send('Hello express');
});

app.listen(PORT, () => {
  console.log(`Express server running on port: ${PORT}`);
});

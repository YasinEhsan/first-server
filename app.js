const express = require('express');
const app = express();
const PORT = 8000;

const STUDENTS = {
  125: {name: 'Cindy', grade: 'A'},
  126: {name: 'Alex', grade: 'F'},
  128: {name: 'Hector', grade: 'B+'},
}


// app.METHOD(PATH, SOURCE)
app.get('/', (req, res) => {
  res.send('Hello express');
});

app.get('/student', (req, res) => {
  // res.send('GNAG GNAG \n GNAG ');
  res.json(STUDENTS)
});

app.get('/student/:sid', (req, res) => {
  // res.send('GNAG GNAG \n GNAG ');
  const studentId = req.params.sid;
  if(STUDENTS[studentId]){
    res.json(STUDENTS[studentId]);
  } else {
    res.sendStatus(404);
  }

});

app.listen(PORT, () => {
  console.log(`Express server running on port: ${PORT}`);
});

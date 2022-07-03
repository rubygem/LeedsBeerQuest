const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/express_backend', (req, res) => { //Line 9
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
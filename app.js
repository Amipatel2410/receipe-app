const express = require('express');
const path = require('path')
const app = express();

const PORT = process.env.PORT || 3000;

const receipeRouter = require('./routes/receipe-routes');
app.use('/receipe', receipeRouter)



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`App is up and running. Listening on port ${PORT}`);
});

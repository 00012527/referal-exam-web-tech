const errorInfo = require('./controllers/errorInfo');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


let port = process.env.PORT || 3000;

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

const newsRoute = require('./routes/news');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(newsRoute);
app.use(errorInfo);


mongoose
  .connect('mongodb+srv://00012527:wiuterian_bis@cluster0.xzxbx.mongodb.net/referal-exam')
  .then(result => {
    app.listen(port);
  })
  .catch(err => {
    console.log(err);
});


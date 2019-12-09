const express = require('express');
const path = require('path');

const app = express();

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.use(express.static('public'));

app.get('/', function(req, res){
  res.render('index');
});

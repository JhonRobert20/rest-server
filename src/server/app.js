const { app } = require('../classes/app')
const { json } = require('body-parser');
const fileUpload = require('express-fileupload');
const { checkUrl, uploadFile, renderUserData, renderData } = require('../functions/functions');


app.use(json());
app.use(fileUpload())
app.set('view engine', 'hbs');


// Ejercicio 2 nivel 1
app.get('/', (req,res) => {
  renderData(res);
});

app.get('/about/:id', (req, res) => {
  renderUserData(req, res);
})

app.get('about.hbs/:id', (req, res) => {
  res.redirect('/about');
})
// Ejercicio 2 nivel 1

app.get('/users/:url/', function(req, res) {
  checkUrl(req, res);
});

app.post('/upload',(req,res) => {
  uploadFile(req, res);
  
})

module.exports = app;
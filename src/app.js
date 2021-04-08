const express = require('express');
const app = express();
const { json } = require('body-parser');
const fileUpload = require('express-fileupload');

app.use(json());
app.use(fileUpload())
app.set('view engine', 'hbs');

const urls = [];
const urlsData = [
  {
  id:1,
  name:"Jhon",
  age: 22,
  url: "google.com"
  },
  {
  id:2,
  name:"Mario",
  age: 22,
  url: "supermario.com"
  },
  {
  id:3,
  name:"Silvia",
  age: 24,
  url: "kirby.com"
  }
];

urlsData.forEach(url => urls.push(url.url));
const extensions = ['.org', '.com', '.es', '.net'];
const extensionsFiles = ['.png', '.jpg', '.gif']

// Ejercicio 2 nivel 1
app.get('/', (req,res) => {
  res.status(200);
  res.render('index', { title: "URLS", message: "Look data", urlData: urlsData})
});

app.get('/about/:id', (req, res) => {
  const urlData = urlsData[parseInt(req.params.id) -1];
  if (urlsData.includes(urlData)) {
    res.status(200);
    res.render('about', { title: "URLS", message: "User data", urlData: urlData });

  } else {
    res.status(404);
    res.json({
      succes:false
    })
  }
})

app.get('about.hbs/:id', (req, res) => {
  res.redirect('/about');
})
// Ejercicio 2 nivel 1

app.get('/users/:url/', function(req, res) {
  const url = req.params.url.trim();
  const extension = url.slice(url.length - 4, url.length);

  if (!extensions.includes(extension)) {
    res.status(404);
    res.json({
      succes: false,
      message: "The url must be real"
    });
    

  } else if (!urls.includes(url)) {
    res.status(404);
    res.json({
      succes:false,
      message: "The url don't exists in our database"
    })
  } 
  
  else {
    res.status(200);
    const indexUrl = urls.indexOf(url);
    res.json({
      succes: true,
      data: urlsData[indexUrl]
    });
  }
});

app.post('/upload',(req,res) => {
  let file = req.files.image;
  const nameFile =  file.name;
  let extensionFile = nameFile.slice(nameFile.length -4, nameFile.length);
  
  if (extensionsFiles.includes(extensionFile)) {
    file.mv(`./files/${file.name}`,err => {
        if(err) return res.status(500).send({ message : err })
        res.status(200);
        res.json({
          succes: true, 
          message : 'File upload'
        })
    })
  } else {
    res.status(400);
    res.json({
      status: false,
      message: 'The file extension must be png, jpg or gif'
    })
  }
})

module.exports = app;
const { urlsData, urls, extensions3, extensions2, extensionsFiles3, extensionsFiles4 } = require("../data/data");
const { badResponse, goodResponse, sendResponse } = require("./sendResponse");

function checkUrl(req, res) {
  try {
    const url = req.params.url.trim();
    const extension3 = getExtension(url, 3);
    const extension2 = getExtension(url, 2);
    if (!extensions3.includes(extension3) && !extensions2.includes(extension2)) {
      badResponse(res, "Visit the index", 404 )
        
    } else if (!urls.includes(url)) {
      badResponse(res, "The url don't exists in our database", 404)
    } 
    
    else {
      const indexUrl = urls.indexOf(url);
      goodResponse(res, urlsData[indexUrl])
    }
  } catch(err) {
    badResponse(res, err, 400)
  }
};

function getExtension(text, number) {
  try {
    return text.slice(text.length - (number + 1), text.length);
  } catch {
    return "";
  }
}

function uploadFile(req, res) {
  try {
    let file = req.files.image;
    const nameFile =  file.name;

    const extensionFile3 = getExtension(nameFile, 3);
    const extensionFile4 = getExtension(nameFile, 4);

    if (extensionsFiles3.includes(extensionFile3) || extensionsFiles4.includes(extensionFile4)) {
      
      const fileName = `./files/${file.name}`;
      file.mv(fileName, (err) =>  { sendResponse(res, err, fileName) } )

    } else {
      badResponse(res, 'The file extension must be png, jpg or gif', 400);
    }
  } catch(err) {
    badResponse(res, err, 400)
  }
  
};

function renderUserData(req, res) {
  const urlData = urlsData[parseInt(req.params.id) -1];
  if (urlsData.includes(urlData)) {
    res.status(200);
    res.render('about', { title: "URLS", message: "User data", urlData: urlData });

  } else {
    badResponse(res, `try another id, you had use: ${req.params.id}`, 404)
  }
}

function renderData(res) {
  res.status(200);
  res.render('index', { title: "URLS", message: "Look data", urlData: urlsData })
}

module.exports.renderData = renderData;
module.exports.checkUrl = checkUrl;
module.exports.uploadFile = uploadFile;
module.exports.renderUserData = renderUserData;
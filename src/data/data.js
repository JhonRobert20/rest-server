const extensions3 = ['.org', '.com', '.net'];
const extensions2 = ['.es'];
const extensionsFiles3 = ['.png', '.jpg', '.gif'];
const extensionsFiles4 = ['.jpeg'];

var urls = [];
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

exports.urls = urls;
exports.urlsData = urlsData;
exports.extensions3 = extensions3;
exports.extensions2 = extensions2;
exports.extensionsFiles3 = extensionsFiles3;
exports.extensionsFiles4 = extensionsFiles4;
const app = require('./src/server/app');
const port = 8000;

app.listen(port, function() { console.log(`Server is running on ${port}`)});
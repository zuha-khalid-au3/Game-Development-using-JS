var express = require('express')
var app = express()
const port=3000;
// respond with "hello world" when a GET request is made to the homepage
app.use(express.static(__dirname +'/public/'));
app.get('/',(req, res) =>res.sendFile('index.html'));

app.listen(port,()=>console.log(`Running on port ${port}`));
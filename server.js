var express = require("express");
var app = express();

app.get('/', (req, res) => {
   res.send({"message":"Hello Abhartech"}) 
});

app.post('/user', (req, res) => {
    res.send({"message":"User Abhartech"}) 
});
 
app.listen(3000, () => {
 console.log("Server running on port 3000");
});
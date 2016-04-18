var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var MongoClient = require('mongodb').MongoClient;
console.log('server is up!');


app.use(bodyParser.urlencoded({extended: true}));
var db;
MongoClient.connect('mongodb://localhost:27017/test2', (err, database) => {
    if (err) throw err;
    db = database;
    app.listen(process.env.PORT, process.env.IP);
    
})

app.post('/', (req, res) => {
  db.collection('plist').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('Item Added!')
    res.redirect('/')
  })
})

app.get('/', function (req, res) {
      res.sendfile(__dirname + '/client/index.html');
      var cursor = db.collection('quotes').find();
     db.collection('plist').find().toArray(function(err, results) {
  
});

})


//app.post('/', function (req, res) {
    //res.send(req.body);
    //console.log('lol' + req.body);
    
//});



//app.listen(process.env.PORT, process.env.IP);
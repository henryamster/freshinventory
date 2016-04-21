var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose'); 
console.log('server is up!');

app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());                                     
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
//connect to mongodb
mongoose.connect('mongodb://localhost:27017/test2')
  //DELETE  //app.listen(process.env.PORT, process.env.IP);
    
    // define model =================
    var Product = mongoose.model('Product', {
        name : String,
        upc : Number,
        category : String
    });
    var Inventory = mongoose.model('Inventory', {
        store : Number,
        date: {type: Date, default: Date.now},
        inventory: Object
        });
/*
INVENTORY CONTROLLER
*/
/*/view route for current inventory 
app.get('/inventory', function(req, res){
    Inventory.findOne({store: 161},function(err, inventory){
        if (err) throw err;
        res.json(inventory);
    });
        
  /*      
        
        
/*
PRODUCTS CONTROLLER
*/

//view route for Products controller
app.get('/products', function (req, res) {
      Product.find(function(err, items){
          if (err) throw err;
          res.json(items);
      });
});
//post route for Products controller
app.post('/products', function (req, res){
    Product.create({
        name : req.body.name,
        upc : req.body.upc,
        category : req.body.category
    }), function(err, product) {
        if (err) throw err;}
        Product.find(function(err, products){
            if (err) throw err;
            res.json(products);
        })
});
//delete route for Products controller
app.delete('/products/:product_id', function (req, res){
    Product.remove({
        _id : req.params.product_id }, function(err, product){
            if (err) throw err;
            Product.find(function(err, products){
                if (err) throw err;
                res.json(products);
            })
        }
    )
});





      //route to angular app
app.get('/', function (req, res){
    res.sendfile(__dirname + '/client/index.html');
});
      
      //res.sendfile(__dirname + '/client/index.html');
      //var cursor = db.collection('quotes').find();
     //db.collection('plist').find().toArray(function(err, results) {
  





app.listen(process.env.PORT, process.env.IP);
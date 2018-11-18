//server connects to routes: connects to controllers: connects to models

let express = require("express");
//Add body parser middleware to express
let bodyParser = require('body-parser');
const messageRoutes = require('./routes/messageRoutes');
const orderRoutes = require('./routes/orderRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(messageRoutes);
app.use(orderRoutes);
app.use(taskRoutes);

const fs = require('fs');
let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://cynthiawilliamsa:w010149a@ds163156.mlab.com:63156/checkpoint-backend-1");

fs.readFile('server/data.csv', 'utf8',(err, data)=>{
  if (err) throw err;
  const sentData = data.split('\n');

  const numArray = sentData[1].split(',');
    app.get("/newComments", (req, res)=>{
      console.log(numArray[0])
      res.send(numArray[0]);
    });
    app.get("/newTasks", (req, res)=> {
      console.log(numArray[1]);
      res.send(numArray[1]);
    });
    app.get("/newOrders", (req, res)=> {
      console.log(numArray[2]);
      res.send(numArray[2]);
    });
    app.get("/tickets", (req, res)=> {
      res.send(numArray[3]);
    });
});

//* Make your app listen to port 3001
app.listen(3001, (err) => {
if (err) {
  return console.log("Error", err);
}
console.log("Web server is now living in apartment 3001");
});
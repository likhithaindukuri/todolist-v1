

const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.get("/",function(req,res){
  var today = new Date();

  if(today.getDay()==4)
  {
    res.send("Yay it's the weekend!");
  }
  else
  {
    res.send("Boo! I have to work!");
  }
  
});


app.Listen(3000,function(){
  console.log("Server started on port 3000");
});

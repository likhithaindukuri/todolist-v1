

const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.get("/",function(req,res){
  var today = new Date();
  var currentDay = today.getDay();

  if(currentDay==6 || currentDay==0)
  {
    res.write("<h1>Yay it's the weekend!</h1>");
  }
  else
  { 
    res.write("<p>It is not the weekend!</p>");
    res.write("<h1>Boo! I have to work!</h1>");
    res.send(); 
  }

});


app.listen(3000,function(){
  console.log("Server started on port 3000");
});

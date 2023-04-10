

const express = require("express");
const bodyParser = require("body-parser");
const mongoose=require("mongoose");
const date=require(__dirname+"/date.js");


const app = express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB",{useNewurlParser:true});

const itemSchema=
{
  name:string
}

const Item=mongoose.model("Item",itemS)

app.get("/",function(req,res){
  const day=date.getDate();
});


app.listen(3000,function(){
  console.log("Server started on port 3000");
});

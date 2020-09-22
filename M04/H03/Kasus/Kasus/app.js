const express = require("express");
const app = express();
const bodyparser = require("body-parser");

const port = process.env.PORT || 3000;

var db = 'mongodb://localhost/test_aneka';
var mongoose = require('mongoose');

var Food = require('./Models/food');

//Middle ware

mongoose.connect(db);

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.post("/order", (req, res) => {
  const body = req.body;
  const Newfood = new Food({
    food_name : body.food_name,
    desc : body.desc
  })
  
  if (body.food_name && body.desc) {
    Newfood.save((err)=>{
      if(err) {
        res.status(401).json({
          message: "Invalid Food creation"
        });
      } else {
        res.status(200).json({
          message: "Food created successfully"
        });
      }
    })
  }
});

app.get("/order", (req, res) => {
  Food.find((err, foods)=>{
    if(err) {
      res.status(401).json({
        message: "Invalid Get"
      });
    } else {
      res.status(200).json(foods);
    }
  }); 
});

app.patch("/order/:id", (req, res) => {
  const food_id = req.params.id;
  const body = req.body;

  Food.findByIdAndUpdate({
    _id : food_id
  },{
    $set:{
      food_name : body.food_name,
      desc : body.desc 
    }
  }, (err)=>{
    if(err) {
      res.status(401).json({
        message: "Invalid Update"
      });
    } else {
      res.status(200).json({
        message: "Food update successfully"
      });
    }
  })
});


app.delete("/order/:id", (req, res) => {
  const food_id = req.params.id;

  Food.findOneAndDelete({_id : food_id}, (err)=>{
    if(err) {
      res.status(401).json({
        message: "Invalid Delete"
      });
    } else {
      res.status(200).json({
        message: "Food delete successfully"
      });
    }
  })
});

app.listen(port, () => {
  console.log(`running at port ${port}`);
});
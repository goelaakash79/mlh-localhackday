const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const QRCode = require('qrcode');
const request = require('request');
const sgMail = require('@sendgrid/mail');

const app = express();

const SENDGRID_API_KEY = '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';
sgMail.setApiKey(SENDGRID_API_KEY);

require('./config/dbconnection');
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

let User = require("./models/User");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/signup", (req, res) => {
  res.render("register");
});

app.post("/signup", (req, res) => {
  console.log(req.body.username);
  var username = req.body.username;
  var url = "https://api.github.com/users/" + username;
  console.log(url);
  request(url, function(err, response, body) {
    if(err) throw err;
    // if (!err && response.statusCode == 200) {
      var data = JSON.parse(body);
      console.log(body);
      // res.render("results", {
      //   data: data
      // });
      res.send(data);
    // }
  });
});

app.get("*", (req, res) => {
  res.send("Page Not Found, 4{}4");
});

app.listen(process.env.PORT || 3000, process.env.IP, function() {
  console.log("server running");
});

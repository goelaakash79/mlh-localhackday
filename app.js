const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const QRCode = require('qrcode');
const sgMail = require('@sendgrid/mail');

const SENDGRID_API_KEY = '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';
sgMail.setApiKey(SENDGRID_API_KEY);

app.get("*", (req, res) => {
  res.send("Page Not Found, 4{}4");
});

app.listen(process.env.PORT || 3000, process.env.IP, function() {
  console.log("server running");
});

/*
File Name: user.js
Student's Name: Anuben Keshavala
StudentID: 301120629
Date: October 5, 2020
*/
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
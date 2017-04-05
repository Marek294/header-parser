var path = require('path');
var express = require('express');

var router = express();
var port = process.env.PORT || 3000;

var object = {};

router.get("/api/whoami", (req,res) => {
  object["ip"] = req.headers["x-forwarded-for"];
  var language = req.headers["accept-language"];
  object["language"] = language.substring(0, language.indexOf(","));
  var software = req.headers["user-agent"];
  object["software"] = software.substring(software.indexOf("(")+1,software.indexOf(")"));
  res.send(object);
});

router.listen(port, function(){
  console.log("Server listening at "+port);
});

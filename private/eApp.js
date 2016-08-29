var express = require("express");
var cors = require("cors");
var massive = require("massive");
var bodyParser = require("body-parser");
//end require
var app = module.exports = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("../public"));
var port = 3000;
app.listen(port,function(){
	console.log("listening on port:",port);
});
//end app.use and app.listen config
var connectionString = "postgress://josh@localhost/blog"; // "postgess://username/host/databaseName"
var massiveInstance = massive.connectSync({connectionString : connectionString}); // who knows
app.set("db", massiveInstance); // setting the "db" obj to equal th massive.connectSync
var db = app.get("db"); // setting var db to app.get "db"
//end db connection
var mainCtrl = require("./mainCtrl.js");
app.get("/posts", mainCtrl.getPosts);
app.put("/secret/:postid", mainCtrl.putPost);
app.post("/secret/post", mainCtrl.postPost);
app.delete("/secret/:postid", mainCtrl.deletePost);

app.post("/message", mainCtrl.postMess);

var app = require("./eApp.js");
var db = app.get("db");

module.exports = {
	getPosts: function(req,res,next){
		db.getPosts(function(err,resp){
			if(err){
				res.send(err);
			}
			else{

				res.send(resp);
			}
		});
	},
	putPost: function(req,res,next){
		db.putPost(req.body.posttext, req.body.posttitle, req.body.posttime, req.body.postimgsrc, req.body.postimgalt, req.params.postid, function(err,resp){
			if(err){
				res.send(err);
			}
			else{
				res.send(resp);
			}
		});
	},
	postPost: function(req,res,next){
		db.postPosts([req.body.posttext, req.body.posttitle, req.body.posttime, req.body.postimgsrc, req.body.postimgalt], function(err,resp){
			if(err){
				res.send(err);
			}
			else{
				res.send(resp);
			}
		});
	},
	deletePost: function(req,res,next){
		db.deletePost([req.params.postid], function(err,resp){
			if(err){
				console.log(err);
				res.send(err);
			}
			else{
				console.log("deleted with this as the param", req.params.postid);
				res.send(resp);
			}
		});
	},
	postMess: function(req,res,next){
		var squirtle = [req.body.messname,req.body.messemail, req.body.messmess];
		// var squirtle = {
		// 	messname: req.body.name,
		// 	messemail: req.body.email,
		// 	messmess: req.body.message
		// };
		console.log(squirtle);
		db.postMess(squirtle, function(err, resp){
			if(err){
				console.log("error in the mainCtrl.js");
				res.send(err);
			}
			else{
				console.log("got to the mainCtrl in the app");
				res.send(resp);
			}
		});
	}
};

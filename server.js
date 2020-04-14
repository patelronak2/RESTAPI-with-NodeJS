/**
	StAuth10065: I Ronak Patel, 000744055 certify that this material is my original work. 
	No other person's work has been used without due acknowledgment. 
	I have not made my work available to anyone else.
**/

var express = require('express');
var app = express();
app.use(express.json());
var sqlite3 = require("sqlite3").verbose();
var file = "api.db";
const db = new sqlite3.Database(file);


db.serialize(function(){
	db.run("DROP TABLE IF EXISTS users");
	db.run("CREATE TABLE users( msgid INTEGER PRIMARY KEY AUTOINCREMENT, status TEXT, message TEXT, timestamp INTEGER)");
	
});


//handles GET requests and return a JSON array of the entire 
//collection (could be empty).
app.get('/api',function(req, res){
	
	db.all("SELECT * FROM users",[],function(err, rows){
		if (err){
			return console.error(error.message);
		}
			res.send(JSON.stringify(rows));		
	});
	
})

app.get('/',function(req, res){
	res.send('<h1>Lab 1: REST API</h1>');
})

//handles PUT requests and replace current collection with new collection
app.put('/api',function(req, res){
	
	db.serialize(function(){
	
		db.run("DELETE FROM users");
		var collection = req.body;
		//console.log(collection.length);
		//var flag = false;
		for (var i = 0; i < collection.length; i++){
			
			var data = collection[i];
			var sql = "INSERT INTO users VALUES (?,?,?,?)";
			
			var d = new Date(data.timestamp);
			var insertDate = d.toLocaleDateString();
			
			if(i == collection.length - 1){
				db.run(sql,[null, data.status, data.message, insertDate],function(err){
					if(err){
						return console.log(err);
						
					}
					res.send('Replace Collection Successful');
				});
			}else{
				
				db.run(sql,[null, data.status, data.message, insertDate],function(err){
					if(err){
						return console.log(err);
						
					}
					
				});
				
			}
		}
		
			
		
	});
	
})

//handles POST requests and add new item to the collection
app.post('/api',function(req, res){
	
	var data = {
		status: req.body.status,
		message: req.body.message,
		date: req.body.timestamp	
	}
	var d = new Date(data.date);
	var insertDate = d.toLocaleDateString();

	var sql = "INSERT INTO users VALUES (?,?,?,?)";
	var params = [null,data.status, data.message, insertDate];
	
	db.run(sql,params,function(err, row){
		if(err){
			console.error(err);
		}
		res.send("Create Entry Successful.");
	});
})

//handles DELETE requests and delete entire collection
app.delete('/api',function(req, res){
	db.run("DELETE FROM users",[],function(err){
		if(err){
			console.error(err);
		}
		res.send('Delete Collection Successful.');
	});
})


//return a JSON object of the entry in the collection with the supplied id
app.get('/api/:id',function(req, res){
	
	db.all("SELECT * FROM users WHERE msgid = ?;",[req.params.id],(err, rows) => {
		if (err){
			console.error(error.message);
		}else{
			res.send(JSON.stringify(rows));
			
		}		
	});
	
	
})

//update the item with the received id in the current collection 
app.put('/api/:id',function(req, res){
	var data = {
		id: req.params.id,
		status: req.body.status,
		message: req.body.message
		//timestamp: req.params.timestamp
	}
	
	var sql = "UPDATE users SET status = ?, message = ? WHERE msgid = ?";
	
	
	db.run(sql,[data.status,data.message, data.id],function(err){
		if(err){
			return console.error(err);
		}
		res.send('Update item successful.');
	});
})

//delete the item from the collection
app.delete('/api/:id',function(req, res){
	
	var id = req.params.id;
	db.run("DELETE FROM users WHERE msgid = ?",[id],function(err){
		if(err){
			console.error(err);
		}
		res.send('Delete Item Successful.');
	});
	
})


var server = app.listen(3000,function(){
	console.log("App running at port 3000...");
})
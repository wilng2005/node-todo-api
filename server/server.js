var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT||3000;

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
	var todo = new Todo({
		text:req.body.text
	});

	todo.save().then((doc)=>{
		res.send(doc);
	},(e)=>{
		res.status(400).send(e);
	});
});

app.get('/todos', (req,res)=>{
	Todo.find().then((todos)=>{
		res.send({
			todos
		});
	},(e)=>{
		res.status(400).send(e);
	});
});

app.get('/todos/:id', (req,res)=>{
	//res.send(req.params);
	var id = req.params.id;

	if(ObjectID.isValid(id)){
		Todo.findById(id)
		.then((todo)=>{
			if(todo){
				res.send({todo});
			}else{
				res.sendStatus(404);
			}
		}).catch((e)=>{
			res.status(400).send();
		});
	}else{
		res.sendStatus(404);
	}
});

app.delete('/todos/:id',(req,res)=>{
	//get the id
	var id = req.params.id;
	//validate the id -> not valid, return 404
	if(ObjectID.isValid(id)){
		Todo.findByIdAndRemove(id).then((todo)=>{
			if(!todo){
				res.sendStatus(404);
			}else{
				res.send({todo})
			}
		})
		.catch((e)=>{
			res.status(400).send();
		});
	}else{
		res.sendStatus(404);
	}

	//remove todo by id
		//success -> if no doc, send 404, if doc, send doc with 200
		//error->400 with empty body
});

app.listen(port,()=>{
	console.log(`Started on port ${port}`);
});

module.exports={app};
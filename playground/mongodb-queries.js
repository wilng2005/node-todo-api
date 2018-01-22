const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a5bfb987248ad5f6ac46d1511';

// if(!ObjectID.isValid(id)){
// 	console.log('ID not valid');
// }

// Todo.find({
// 	_id: id
// })
// .then((todos)=>{
// 	console.log(todos);
// });

// Todo.findOne({
// 	_id: id
// })
// .then((todo)=>{
// 	console.log(todo);
// });

// Todo.findById(id)
// .then((todo)=>{
// 	if(!todo){
// 		return console.log('Id not found');
// 	}
// 	console.log(todo);
// })
// .catch((e)=>console.log(e));

var id = '5a3c6117dc3b8ea6e247bac2';

User.find({
	_id: id
})
.then((users)=>{
	console.log(users);
});

User.findOne({
	_id: id
})
.then((user)=>{
	console.log(user);
});

User.findById(id)
.then((user)=>{
	if(!user){
		return console.log('Id not found');
	}
	return console.log(user);
})
.catch((e)=>console.log(e));

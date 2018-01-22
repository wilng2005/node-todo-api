// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{

	if(err){
		return console.log('Unable to connect to MongoDB server');
	}

	console.log('Connected to MongoDB server');

	//deleteMany
	// db.collection('Todos').deleteMany({text: 'Eat something'}).then((result)=>{
	// 	console.log(result);
	// });

	//deleteOne
	// db.collection('Todos').deleteOne({text: 'Eat something'}).then((result)=>{
	// 	console.log(result);
	// });
	
	//findOneAndDelete
	// db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
	// 	console.log(result);
	// });

	//deleteMany Users
	// db.collection('Users').deleteMany({age: {$lt:30}}).then((result)=>{
	// 	console.log(result);
	// });

	//findOneAndDelete Users
	db.collection('Users').findOneAndDelete({_id:new ObjectID('5a31d537f0705938e663a2f5')}).then((result)=>{
		console.log(result);
	});

	//db.close();
});
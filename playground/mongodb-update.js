// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{

	if(err){
		return console.log('Unable to connect to MongoDB server');
	}

	console.log('Connected to MongoDB server');

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID("5a331b287fd6aa71f1affe60")
	// },{
	// 	$set: {
	// 		completed: true,
	// 		text: "Walk the monkey"
	// 	}
	// },{
	// 	returnOriginal: false
	// }).then((result)=>{
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID("5a31d5274fd16538e3348c82")
	},{
		$inc: {
			age:2
		}
	},{
		returnOriginal: false
	}).then((result)=>{
		console.log(result);
	});
	//db.close();
});
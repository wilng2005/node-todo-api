const expect = require('expect');
const {Todo} = require('./../../models/todo');

//console.log(app);

describe('Todo model',()=>{
	it('should save a new todo',(done)=>{
		var todo = new Todo({
			text:"Boomz"
		});

		todo.save().then((doc)=>{
			// console.log("Saved",doc);
			expect(doc.text).toBe('Boomz');
			done();
		},(e)=>{
			// console.log("Error:",e);
			done(e);
		})
		.catch(e=>{
			// console.log("Caught Error:",e);
			done(e);
		});

		// console.log('ended');
	});

});
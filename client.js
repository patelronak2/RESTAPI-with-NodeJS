/**
	StAuth10065: I Ronak Patel, 000744055 certify that this material is my original work. 
	No other person's work has been used without due acknowledgment. 
	I have not made my work available to anyone else.
**/

/**
	NOTE: In order to get the correct result, database needs to be reset first.
	
	Run server.js freshly before running this file.
	
	values in GET, PUT, DELETE requests for single item has been hard coded.


**/


const axios = require('axios');

async function test1(){
	
	try{
		console.log('Test 1....');
		var item1 = {"status":"100", "message":"item 1","timestamp":"08-08-1998"};
		var item2 = {"status":"101", "message":"item 2","timestamp":"08-08-1998"};
		var item3 = {"status":"102", "message":"item 3","timestamp":"08-08-1998"};
		var item4 = {"status":"100", "message":"modified item 1","timestamp":"08-08-1998"};
		
		const request1 = await axios.post('http://localhost:3000/api', item1);
			console.log(request1.data);
		const request2 = await axios.post('http://localhost:3000/api', item2);
			console.log(request2.data);
		const request3 = await axios.post('http://localhost:3000/api', item3);
			console.log(request3.data);
		const confirmResult = await axios.get('http://localhost:3000/api');
			console.log(confirmResult.data);
		const request4 = await axios.put('http://localhost:3000/api/1', item4 );
			console.log(request4.data);
		const request5 = await axios.get('http://localhost:3000/api/1');
			console.log(request5.data);
		const request6 = await axios.get('http://localhost:3000/api/2');
			console.log(request6.data);
		const request7 = await axios.get('http://localhost:3000/api/3');
			console.log(request7.data);

			
		
	}catch(error){
		console.error(error);
	}
	
}

async function test2(){
	
	try{
		console.log('Test 2....');
		var collection1 = [
			{"status":"200", "message":"item 1","timestamp":"08-08-1998"},
			{"status":"201", "message":"item 2","timestamp":"08-08-1998"},
			{"status":"202", "message":"item 3","timestamp":"08-08-1998"},
			{"status":"203", "message":"item 4","timestamp":"08-08-1998"}];
		

		
		const request1 = await axios.put('http://localhost:3000/api', collection1);
			console.log(request1.data);
			
		const request2 = await axios.get('http://localhost:3000/api');
			console.log(request2.data);
			
		const request3 = await axios.delete('http://localhost:3000/api/6');
			console.log(request3.data);
			
		const request4 = await axios.get('http://localhost:3000/api');
			console.log(request4.data);
				
			
	}catch(error){
		console.error(error);
	}
	
}

async function test3(){
	
	try{
		console.log('Test3...');
		
		var collection1 = [
			{"status":"300", "message":"item 1","timestamp":"08-08-1998"},
			{"status":"301", "message":"item2","timestamp":"06-08-1998"},
			{"status":"302", "message":"item3","timestamp":"07-08-1998"}];
		var item1 = {"status":"303", "message":"item 5","timestamp":"08-08-1998"};
		var item2 = {"status":"304", "message":"item 6","timestamp":"09-08-1998"};
		var item3 = {"status":"303", "message":"modified item 5","timestamp":"05-08-1998"};
		
		const request1 = await axios.delete('http://localhost:3000/api');
			console.log(request1.data);
		const request2 = await axios.get('http://localhost:3000/api');
			console.log(request2.data);
		const request3 = await axios.put('http://localhost:3000/api', collection1);
			console.log(request3.data);
		const confirmResult1 = await axios.get('http://localhost:3000/api');
			console.log(confirmResult1.data);
		const request4 = await axios.post('http://localhost:3000/api', item1);
			console.log(request4.data);
		const request5 = await axios.post('http://localhost:3000/api', item2);
			console.log(request5.data);
		const confirmResult2 = await axios.get('http://localhost:3000/api');
			console.log(confirmResult2.data);
		const request6 = await axios.put('http://localhost:3000/api/11', item3 );
			console.log(request6.data);
		const confirmResult3 = await axios.get('http://localhost:3000/api');
			console.log(confirmResult3.data);
		const request7 = await axios.delete('http://localhost:3000/api/9');
			console.log(request7.data);
		const request8 = await axios.get('http://localhost:3000/api');
			console.log(request8.data);
			
	}catch(error){
		console.error(error);
	}
	
}

test1().then(test2).then(test3);



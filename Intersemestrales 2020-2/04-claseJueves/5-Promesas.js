const myFunction = (success)=> {
	return new Promise((resolve, reject) => {
		if (success) {
			// Todo salio bein
			resolve('Hey!!!');
		} else {
			reject('Whoops!!! Somenthing went wrong');
		}
	});
}

const myFunction2 = (success)=> {
	return new Promise((resolve, reject) => {
		if (success) {
			setTimeout(()=> {
				resolve('Hey!!!');
			}, 1000)
		} else {
			const error = new Error('Whoops!!! Somenthing went wrong');
			reject(error);
		}
	});
}

/*myFunction(true)
	.then(response => console.log(response))
	.catch(error => console.log(error));

myFunction2(false)
	.then(response => console.log(response))
	.catch(error => console.log(error));*/

Promise.all([myFunction(false), myFunction2(true)])
	.then(response => {
		console.log(response);
	})
	.catch(error => {
		console.error(error);
	});
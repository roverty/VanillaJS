const myFunction = (success)=> {
	return new Promise((resolve, reject) => {
		if (success) {
			setTimeout(()=> {
				resolve('Hey!!!');
			}, 1000)
		} else {
			reject('Whoops!!! Somenthing went wrong');
		}
	});
}

const otherFunction = (success)=> {
	return new Promise((resolve, reject) => {
		if (success) {
			setTimeout(()=> {
				resolve('Hey!!!');
			}, 4000)
		} else {
			reject(new Error('Whoops!!! Somenthing went wrong'));
		}
	});
}

/*async function main() {
	const messasge = await myFunction(true);
	console.log(messasge);
}
*/
const main = async () => {
	try {
		const myMessasge = await myFunction(true);
		const otherMssasge = await otherFunction(false);

		console.log(otherMssasge);
		console.log(myMessasge);
		
	} catch (err) {
		console.log(err);
	}
}

main();
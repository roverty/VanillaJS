const request = require('request');

const data = ((URL) => {
	return new Promise((resolve, reject) => {
		request(URL, function (err, response, body) {
			const bodyJSON = JSON.parse(body);
			if (err) {
				reject(err);
			} else {
				resolve(bodyJSON);
			}
		})
	});
});

module.exports = data;
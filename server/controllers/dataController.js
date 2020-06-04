const csvtojson = require("csvtojson");
const fs = require("fs");

let dataControllers = {
	getData: (req, res, next) => {
		let files = fs.readdirSync("./data");
		files = files.filter(file => file.includes(".csv"));

		const promises = files.map(file => csvtojson().fromFile("./data/" + file));

		Promise.all(promises)
			.then((results) => res.json(results))
			.catch((err) => console.warn(err));
	}
};

module.exports = dataControllers;
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
	},
	getFarms: (req, res, next) => {
		let files = fs.readdirSync("./data");

		let filtereFiles = files.filter(file => file.includes(".GeoJSON"));

		let farms = filtereFiles.map(file => JSON.parse(fs.readFileSync("./data/" + file)));

		res.json(farms);
	}
};

module.exports = dataControllers;
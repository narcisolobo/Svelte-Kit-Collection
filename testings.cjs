const pokeJson = require('./testing-data.json');

function tableSourceMapper(source, keys) {
	return source.map((row) => {
		const mappedRow = {};
		keys.forEach((key) => (mappedRow[key] = row[key]));
		return mappedRow;
	});
}
/** Map an array of objects to an array of values. */
function tableSourceValues(source) {
	return source.map((row) => Object.values(row));
}
/** Sets object order and returns values. */
function tableMapperValues(source, keys) {
	return tableSourceValues(tableSourceMapper(source, keys));
}

const pokes = pokeJson.results;

console.log(tableMapperValues(pokes, ['name', 'url']));

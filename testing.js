"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_data_json_1 = require("./testing-data.json");
function tableSourceMapper(source, keys) {
    return source.map(function (row) {
        var mappedRow = {};
        keys.forEach(function (key) { return (mappedRow[key] = row[key]); });
        return mappedRow;
    });
}
/** Map an array of objects to an array of values. */
function tableSourceValues(source) {
    return source.map(function (row) { return Object.values(row); });
}
/** Sets object order and returns values. */
function tableMapperValues(source, keys) {
    return tableSourceValues(tableSourceMapper(source, keys));
}
var pokes = testing_data_json_1.default.results;
console.log(tableMapperValues(pokes, ['name', 'url']));

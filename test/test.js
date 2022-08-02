// https://mockaroo.com
const json = require("./test.json");
const {
    json2csv
} = require("../lib");

console.dir(json2csv(json))
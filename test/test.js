// https://mockaroo.com
const json = require("./test.json");
const {
    json2csv
} = require("../build/json2csv.js")

console.dir(json2csv(json))
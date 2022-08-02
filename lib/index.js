"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.json2csv = void 0;
function json2csv(json) {
    const headerFields = new Set();
    let rows = "";
    json.map((obj) => {
        let row = "";
        for (const [key, value] of Object.entries(obj)) {
            headerFields.add(key);
            row += value + ",";
        }
        ;
        rows += (row.slice(0, -1) + "\n");
    });
    let headerRow = "";
    for (const headerField of headerFields) {
        headerRow += headerField + ",";
    }
    return headerRow.slice(0, -1) + "\n" + rows;
}
exports.default = json2csv;
exports.json2csv = json2csv;

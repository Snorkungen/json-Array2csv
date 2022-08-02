export default function json2csv(json: JSON[]) {
    const headerFields = new Set();
    let rows: string = "";
    json.map((obj: any) => {
        let row: string = "";
        for (const [key, value] of Object.entries(obj)) {
            headerFields.add(key);
            row += value + ",";
        };
        rows += (row.slice(0, -1) + "\n");
    })
    let headerRow = "";
    for (const headerField of headerFields) {
        headerRow += headerField + ",";
    }
    return headerRow.slice(0, -1) + "\n" + rows;
}

export {
    json2csv
}
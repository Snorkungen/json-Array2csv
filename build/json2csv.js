"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.json2csv = void 0;
function json2csv(json) {
    var e_1, _a;
    var headerFields = new Set();
    var rows = "";
    json.map(function (obj) {
        var e_2, _a;
        var row = "";
        try {
            for (var _b = __values(Object.entries(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                headerFields.add(key);
                row += value + ",";
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        ;
        rows += (row.slice(0, -1) + "\n");
    });
    var headerRow = "";
    try {
        for (var headerFields_1 = __values(headerFields), headerFields_1_1 = headerFields_1.next(); !headerFields_1_1.done; headerFields_1_1 = headerFields_1.next()) {
            var headerField = headerFields_1_1.value;
            headerRow += headerField + ",";
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (headerFields_1_1 && !headerFields_1_1.done && (_a = headerFields_1.return)) _a.call(headerFields_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return headerRow.slice(0, -1) + "\n" + rows;
}
exports.json2csv = json2csv;

// const path = require("path");
// // console.log(path.sep)

// const paths = ["/content", "subfolder", "test.txt"];
// const filePath = path.join(...paths);

// // const filePath = path.join("/content", "subfolder", "test.txt");

// console.log(filePath);

// const baseName = path.basename(filePath);
// console.log(baseName);

// const absolute = path.resolve(__dirname, ...paths);
// console.log(absolute);

// console.log(__dirname);

const _ = require('lodash');
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);

console.log(newItems);
"use strict";
exports.__esModule = true;
var node_fetch_1 = require("node-fetch");
var fetchMockData = function (typeOfData) {
    if (typeOfData === "posts") {
        (0, node_fetch_1["default"])('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) { return response.json(); })
            .then(function (json) { return console.log(json); });
    }
    if (typeOfData === "comments") {
        (0, node_fetch_1["default"])('https://jsonplaceholder.typicode.com/comments')
            .then(function (response) { return response.json(); })
            .then(function (json) { return console.log(json); });
    }
};
fetchMockData("comments");
// const fetchComments = () => {
// }
// const fetchPosts = () => {
// }

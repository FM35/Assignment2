"use strict";
exports.__esModule = true;
var function_1 = require("fp-ts/function");
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
var fetchComments = function () {
    (0, function_1.pipe)("comments", fetchMockData);
};
var fetchPosts = function () {
    (0, function_1.pipe)("posts", fetchMockData);
};
fetchComments();

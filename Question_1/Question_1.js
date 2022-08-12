"use strict";
//f: A -> [A] -> [A]
const push = (a, l) => {
    l[l.length] = a;
    return l;
};
//f: Number -> Number -> [A] -> [A]
const slice = (num1, num2, l) => l.slice(num1, num2);
const splice = (num1, num2, l) => l.splice(num1, num2);
//f: [String] -> {String: any} -> {String: any}
const filterByKey = (l, obj) => {
    return Object.fromEntries(Object.entries(obj).filter(([key]) => l.includes(key) ? false : true));
};
//f: [A] -> [B] -> [[A,B]]
const zippedArray = (a, b) => {
    return a.map((val, index) => [val, b[index]]);
};

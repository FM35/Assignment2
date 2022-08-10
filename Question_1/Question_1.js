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
// const c =
//f: [A] -> [B] -> [[A,B]]
const to2DArray = (a, b) => {
    return a.map((val, index) => [val, b[index]]);
};

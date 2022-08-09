//f: A -> [A] -> [A]
var push = function (a, l) {
    l[l.length] = a;
    return l;
};
//f: Number -> Number -> [A] -> [A]
var slice = function (num1, num2, l) { return l.slice(num1, num2); };
var splice = function (num1, num2, l) { return l.splice(num1, num2); };
//f: [String] -> {String: any} -> {String: any}
// const c =
//f: [A] -> [B] -> [[A,B]]
var to2DArray = function (a, b) {
    return a.map(function (val, index) { return [val, b[index]]; });
};

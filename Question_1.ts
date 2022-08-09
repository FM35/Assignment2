//f: A -> [A] -> [A]
const push = <A>(a: A, l: Array<A>): Array<A> =>
            {   l[l.length] = a
                return l
            };

//f: Number -> Number -> [A] -> [A]
const slice = <A>(num1: number, num2: number, l: Array<A>): Array<A> => l.slice(num1, num2);
const splice = <A>(num1: number, num2: number, l: Array<A>): Array<A> => l.splice(num1, num2);

//f: [String] -> {String: any} -> {String: any}
// const c =

//f: [A] -> [B] -> [[A,B]]
const to2DArray = <A, B>(a: Array<A>, b: Array<B>): [A, B][] => {
    return a.map((val, index) => [val, b[index]]);
};
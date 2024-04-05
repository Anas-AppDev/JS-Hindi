let a = "87"
let b = "87abc"
let k = null
let c = true
let p = undefined

console.log("Conversion to Number")
console.table(
    [
        Number(a),
        Number(b),
        Number(k),
        Number(c),
        Number(p),
    ]
)

console.log()

let d = 65
let e = true

console.log("Conversion to String")
console.table(
    [
        String(d),
        String(e),
    ]
)

console.log();


let f = 65
let g = "shruti"
let h = ""

console.log("Conversion to Boolean")
console.table(
    [
        Boolean(f),
        Boolean(g),
        Boolean(h),
    ]
)


//special cases

console.log(+true)
console.log(+"")

console.log("1" + 2 + 3)
console.log(1 + 2 + "3")

let n1, n2, n3;
n1 = n2 = n3 = 5;

console.log(n1)
console.log(n2)
console.log(n3)
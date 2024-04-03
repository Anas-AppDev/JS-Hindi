let a = "87"
let b = "87abc"

let c = true

console.log("Conversion to Number")
console.table(
    [
        Number(a),
        Number(b),
        Number(c),
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
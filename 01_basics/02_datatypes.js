"use strict"

//number - 2^53
//bigint
//string
//boolean
//null - empty value
//undefined - value not defined
//symbol - for finding uniqueness 


//object

const a = 1;
let b = "shruti";
var c = "mac"
//d = true    //bad practice
let e;

console.table(
    [
        typeof a,
        typeof b,
        typeof c,
        typeof d,
        typeof e,
        typeof null
    ]
);


console.log("Primitive Datatypes")

const n = 5
const str = "shruti"
const j = true
const k = null
let p
const s = Symbol('123')
const n2 = 34567890556789n

console.table(
    [
        typeof n,
        typeof str,
        typeof j,
        typeof k,
        typeof p,
        typeof s,
        typeof n2,
    ]
)


console.log("Non Primitive Datatypes")

let arr = ["anas", "aman", "ishan"]
let map = {
    "1" : "apple",
    "2" : "samsung",
    "3" : "xiaomi",
    "4" : "google",
}
let fun = function(){

}

console.table(
    [
        typeof arr,
        typeof map,
        typeof fun,
    ]
)


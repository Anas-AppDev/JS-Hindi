const str = new String("shruti")

console.log(str)

console.log(str[0])

console.log(str.__proto__)

console.log(str.length)

console.log(str.toUpperCase())
console.log(str.charAt(2))
console.log(str.indexOf('t'))



let str2 = "airpods"
console.log(str2.substring(0,3))
console.log(str2.slice(-4,7))


str2 = "   airpods  "
console.log(str2.trim())

console.log(str2.trim().replace("pods", "printer"))

console.log(str2.includes("air"));

const spitter = 'abc def ghi';
console.log(spitter.split(' '))



let obj1 = {prop1: 999, prop2: "dog"}
const obj2 = {prop1: "prop1", prop2: obj1, prop3: 321}
let obj3 = {prop1: null, prop2: "aLargerSentence"}

let num1 = 1;
let num2 = 2;
let num3 = 3;
let str2 = "asd";

let arr1 = ["qwe",str2,"zxc",1,num2,num3, false, obj3, obj2, {prop1: 999, prop2: "dog"}]

let aim = obj1
let startPos = 0

console.log(arr1.includes(aim,startPos)," ~ ",aim)

let slicedArray = arr1.slice(3,9)


console.log("slicedArray ~ ", slicedArray)
console.log("arr1 ~ ", arr1)

slicedArray[2] = 333
num2 = 777
obj2.prop1 = "It changes"

console.log("slicedArray After ~ ", slicedArray)
console.log("arr1 After ~ ", arr1)

let $_$ = 22;
console.log($_$*3)

for (let elem of arr1){
    console.log("inside for of ARR1~ ", elem)
}

console.log("poping an element ~ ", arr1.pop())
console.log("poped array ~ ", arr1)

let str = 'this 1 is a "long" string with more than 35 chars to test the 6 main string methods in JS'

console.log("match ~ ", str.match(/[0-9]/g))
console.log("match ~ ", str.slice(10,20))
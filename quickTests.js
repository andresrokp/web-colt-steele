function highOrderFunction(){
    let curried1 = function (a){
        return function (b){
            return a*b;
        }
    }

    let curried2 = a => b => a*b;

    let arr = [1,2,3,4,5,6,7,8,9]


    let ans1 = arr.map(elem => elem*2)
    let ans2 = arr.map(curried1(2))
    let ans3 = arr.map(curried2(2))

    console.log(`ans1 :: ${ans1}`)
    console.log(`ans2 :: ${ans2}`)
    console.log(`ans3 :: ${ans3}`)
}

function thisAnki(){
    let numIWantToConvertIntoString = 123.4;
    let anStringFromTheNumberIwant = numIWantToConvertIntoString.toString()
    console.log(`number :: ${typeof numIWantToConvertIntoString} :: ${numIWantToConvertIntoString}`)
    console.log(`string :: ${typeof anStringFromTheNumberIwant} :: ${anStringFromTheNumberIwant}`)
    console.log('---------')
    let anObjectToTakeTheKeysFrom = {
        a : 1,
        b : 2,
        c : 3,
        d : 4
    }
    console.log(Object.keys(anObjectToTakeTheKeysFrom))
    console.log('---------')
    let arr = [1,2,3,4,5,6,7,8,9]
    let sliced = arr.slice(1,4)
    sliced[1] = 999
    console.log(`original :: ${arr} \nsliced :: ${sliced}`)
}

/*
based on >>>  https://jsmanifest.com/the-power-of-functions-returning-other-functions-in-javascript/

Explore passig function
*/
function elementalFunctionPassing(){
    function anotherFunctionThatGetThePackedFunctionAndReturnItExecuted(packedFunction){
        return packedFunction(new Date()) // even its here qhen it gets its argument
    }

    function funThatGetAPackedFuncAndPassItToAnotherFun(packedFunction){
        anotherFunctionThatGetThePackedFunctionAndReturnItExecuted(packedFunction)
    }

    funThatGetAPackedFuncAndPassItToAnotherFun( function (date){})

    
}

let myMath = {
    PI : 3.141516,
    cube : function cube(n){return n ** 3},
    square : function square(n){return n ** 3},
    fourth(n){return n ** 4},
    nPowerM(n,m){return n ** m}
}

console.log(myMath["cube"](3))
console.log(myMath.nPowerM(4,3))
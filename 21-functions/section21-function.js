const var1 = "global scope"

function scopeTest(){
    let var1 = "local scope"
    console.log(`inside ${var1}`);
    return "getting out scope"
}

console.log(`outside ${var1}`)
let var2 = scopeTest()
console.log(`got out ${var2}`)


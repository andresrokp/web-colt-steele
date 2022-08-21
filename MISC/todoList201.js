
let todoList = [];
let msgDict = {
    goodCmd : "Introduce a command",
    errorCmd : "Please enter a valid command",
    msgNewAct : "Enter the activity",
}
let logsDict = {
    newOK: (todo)=>{console.log(todo," added to the list")}
}

let opc = "";
let badInput = false;

while(opc !== "quit"){
    opc = prompt(badInput ? msgDict.errorCmd : msgDict.goodCmd) || "";
    badInput = false;
    switch(opc){
        case "new":
            let todo = prompt(msgDict.msgNewAct)
            todoList.push(todo)
            logsDict.newOK(todo)
            break;
        case "list":
            console.log("*********");
            for(let i in todoList){console.log(i,': ',todoList[i])}
            console.log("*********");
            break;
        case "delete":
            // let deletePos = prompt("Enter the position to delete")
            // todo.splice()
            // break;
        case "quit":
            opc = "quit"
            console.log("OK, YOU QUIT THE APP")
            break;
        default:
            badInput = true;
            break;
    }
}
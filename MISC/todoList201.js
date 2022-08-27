
let todoList = [];
let msgDict = {
    goodCmd : "Introduce a command",
    errorCmd : "Please enter a valid command",
    msgNewAct : "Enter the activity",
    delNormal : "Enter the position to delete",
    delBad : "Enter the position to delete"
}
let logsDict = {
    newOK: (todo)=>{console.log(todo," added to the list")},
    listTodos: (todoList)=>{
        console.log("*********");
        for(let i in todoList){console.log(i,': ',todoList[i])}
        console.log("*********");
    },
    del: (todoList, pos)=>{
        console.log(`${todoList[pos]} in the position ${pos} has been deleted`)
    }
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
            logsDict.listTodos(todoList)
            break;
        case "delete":
            let badDel = false
            while(true){
                let delPos = parseInt(prompt(badDel ? msgDict.delBad : msgDict.delNormal) || "-1");
                if(!isNaN(delPos) && 0 <= delPos && delPos < todoList.length){
                    logsDict.del(todoList,delPos)
                    todoList.splice(delPos,1);
                    badDel = false;
                    break;
                }else{
                    badDel = true;
                }
            }
            break;
        case "quit":
            opc = "quit"
            console.log("OK, YOU QUIT THE APP")
            break;
        default:
            badInput = true;
            break;
    }
}

let todoList = [];
let opc = "";
let msgNormal = "Introduce a command"
let msgError = "Please enter a valid command"
let msg = msgNormal;

while(opc !== "quit"){
    opc = prompt(msg)
    switch(opc){
        case "new":
            let todo = prompt("Enter the activity")
            todoList.push(todo)
            console.log(todo," added to the list")
            break;
        case "list":
            console.log("*********");
            for(let i in todoList){console.log(i,': ',todoList[i])}
            console.log("*********");
            break;
        case "delete":
            let deletePos = prompt("Enter the position to delete")
            todo.splice()
            break;
        case "quit":
            opc = "quit"
            console.log("OK, YOU QUIT THE APP")
            break;
        default:
            msg = msgError;
            break;
    }
}
const some = "something"
const any = "anyone"
 
const callBack = some

function recievesAFunction(callBack){
    return callBack(some)
}
console.log(recievesAFunction)
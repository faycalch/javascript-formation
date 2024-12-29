function exeplevar() {
    var x = 5
    if (true) {
        var x = 10
        console.log(x,"x a l'intérieur d'un message")
        
        
    }

    console.log("le x a l'extérieur de la condition ", x)
}
exeplevar()
function exeplelet() {
    let y = 5
    if (true) {
        let y = 10
        console.log(y,"y a l'intérieur d'un message")
        
        
    }

    console.log("le y a l'extérieur de la condition ", y)
}
exeplelet()
function exempleconst() {
const z = 5
 z = 10
console.log(z,"le résultat du z")
    
}
exempleconst()
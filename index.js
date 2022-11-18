const verdad = () => 1 === 1;

const promesa = new Promise((resolve, reject) =>{
    if(true){
        setTimeout(function(){console.log("Hola soy una promesa")}, 5000)
    } else {
        console.log("error")
    }
})

function* generadora() {
    let id = 0;
    while (true) {
        let multiplicacion = id++*2
        if (multiplicacion === 100) {
            return multiplicacion;
        }
        yield multiplicacion;
    }
}
const valorGenerado = generadora();
console.log(valorGenerado.next().value)




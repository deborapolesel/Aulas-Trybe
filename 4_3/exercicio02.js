//Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

let valorInserido = 10;
let linhaAsteriscos = "*";

if (valorInserido >1){
    for (let i=0; i<valorInserido;i++){
        console.log (linhaAsteriscos);
        linhaAsteriscos += "*";
    }
} else {
    console.log("O número deve ser maior que 1");
}
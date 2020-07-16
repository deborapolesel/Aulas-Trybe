//Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

let valorInserido = 10;
let linhaAsteriscos = "";

if (valorInserido >1){
    for (let i=0; i<valorInserido;i++){
        linhaAsteriscos = linhaAsteriscos + "*";
    }
    for (let i=0; i<valorInserido;i++){
        console.log (linhaAsteriscos);
    }
} else {
    console.log("O número deve ser maior que 1");
}
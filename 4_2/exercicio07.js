// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = [];

for (let i=0; i<numbers.length;i++){
    if (i===0){
        menorNumero.push (numbers[i]);
    } else {
        if (numbers[i] < menorNumero){
            menorNumero = numbers[i];
        }
    }
}
console.log (menorNumero);
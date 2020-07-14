// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

let pecaXadrez = "Bispo";
let pecaXandrezConvertida = pecaXadrez.toLocaleLowerCase();

if (pecaXandrezConvertida == "peão"){
    console.log("Ande uma casa para frente. No primeiro movimento podem ser duas casas.");
} else if (pecaXandrezConvertida == "torre"){
    console.log("Ande na horizontal e vertical quantas casas quiser");
} else if (pecaXandrezConvertida == "cavalo"){
    console.log("Ande 4 casas em forma de L");
} else if (pecaXandrezConvertida == "bispo"){
    console.log("Ande na diagonal quantas casas quiser");
} else if (pecaXandrezConvertida == "rei"){
    console.log("Ande apenas uma casa para qualquer direção");
} else if (pecaXandrezConvertida == "rainha"){
    console.log("Ande na horizontal e vertical");
} else {
    console.log('Erro! A peça não foi identificada');
}

//OU 

let chessPiece = 'bispo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal e horizontal.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};
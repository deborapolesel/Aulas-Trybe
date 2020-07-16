// Agora inverta o lado do triângulo.

let valor = 5;
let index;
let colunaIndex;
let linha = '';
let posicao = valor;

for (index = 0; index < valor; index++) {
  for (colunaIndex = 0; colunaIndex <= valor; colunaIndex++) {
    if (colunaIndex < posicao) {
      linha = linha + ' ';
    } else {
      linha = linha + "*";
    }
  }
  console.log(linha);
  linha = '';
  posicao--;
};
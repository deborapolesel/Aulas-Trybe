// Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%, que deve ser considerado no cálculo do lucro.
// Seu programa também deve emitir uma mensagem de erro e encerrar, caso algum dos seus valores de entrada seja menor que zero.

let custoDeProduto = 10;
let valorDeVenda = 10;

if (custoDeProduto <= 0 || valorDeVenda <= 0) {
    console.log ("Erro! Valor incorreto");
} else {
    let lucro = ((valorDeVenda - (custoDeProduto*1.2))*1000);
    if (lucro > 0) {
        console.log (`O lucro foi de ${lucro}`);
    } else {
    lucro *= -1;
    console.log (`O prejuízo foi de ${lucro}`);
    }
}
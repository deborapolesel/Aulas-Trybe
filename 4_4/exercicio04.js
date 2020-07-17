// Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

console.log(Object.values(info));

//outra forma
for(let properties in info){
  console.log(info[properties]);
}
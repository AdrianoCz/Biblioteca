class Carro {
  constructor(modelo, valor, ano) {
    this.modelo = modelo;
    this.valor = valor;
    this.ano = ano;
  }
}
let modelo = prompt("Digite o modelo de seu quarto");
let valor = Number(prompt("Digite o valor de seu carro"));
let ano = Number(prompt("Digite ano do seu carro"));
let carro = new Carro(modelo, valor, ano);
let novoValor = console.log(atualizarValorCarro(carro));
function atualizarValorCarro(x) {
  x.valor = x.valor * x.ano
  return x
}


//Math.round(X) === Retorna o valor de X arredondado
console.log(Math.round(4.7));

//Math.abs(X) === Retorna o valor de (X) Positivo
console.log(Math.abs(-4.7));

//Math.sqrt(X) === Retorna raiz quadrada de (X)
console.log(Math.sqrt(400));

//Math.ceil(X) === Retorna o valor de (X) arredondado para cima
console.log(Math.ceil(4.1));

//Math.floor(X) === Retorna o valor de (X) arredondado para baixo
console.log(Math.floor(4.7));

//Math.cos(X) === Retorna o cosseno (um valor entre -1 e 1) do ângulo x (dado em radianos)
console.log(Math.cos(4.7));

//Math.sin(X) === Retorna o seno (um valor entre -1 e 1) do ângulo x (dado em radianos)
console.log(Math.sin(4.7));


//Math.PI(X) === Retorna a razão entre a circunferência de um circulo e seu diâmetro
console.log(Math.PI);
// expected output: 3.141592653589793
function calculateCircumference(radius) {
  return 2 * Math.PI * radius;
}
console.log(calculateCircumference(10));
// expected output: 62.83185307179586

// Math.random() === é usado para retornar um número pseudoaleatório de ponto flutuante entre 0 e 1
console.log(Math.random() * 21)

//Método Math.() em conjunto
console.log(Math.floor(Math.random() * 21))//numero pseudoaleatório entre 1 e 20 arredondado para baixo.



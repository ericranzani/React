//Tudo é Objeto
//Um objeto possui propriedades e métodos que podem ser diretos ou herdados (protótipo).
// Todo objeto possui um protótipo, menos o null e o undefined (este não é um objeto).

["10", "20", "30"].map(Number); // [10, 20, 30];
"JavaScript".toUpperCase(); // JAVASCRIPT

const body = document.querySelector("body");
body.classList.add("js"); // adiciona JS ao Body

//Arrow Function
//A principal diferença é o contexto do this. A arrow function não cria o próprio this.
const upperName = function (name) {
  return name.toUpperCase();
};
upperName("Eric"); // ERIC

const lowerName = (name) => {
  return name.toLowerCase();
};
lowerName("Ranzani"); // ranzani

const countLetters = (word) => word.length;
countLetters("Ranzani"); // 7

//Destructuring
//É possui desestruturar objetos e arrays.
function handleMouseMove(event) {
  const clientX = event.clientX;
  const clientY = event.clientY;
  console.log(clientX, clientY);
}

// Irá definir uma constante para cada propriedade
// dentro de event, que tiver o mesmo nome que a constante.
function handleMouseMove(event) {
  const { clientX, clientY } = event;
  //console.log(clientX, clientY);
}

// Podemos desestruturar o parâmetro
function handleMouseMove({ clientX, clientY }) {
  //console.log(clientX, clientY);
}

document.documentElement.addEventListener("mousemove", handleMouseMove);

//com arrays
const frutas = ["Banana", "Uva"];
const [fruta1, fruta2] = frutas;
// fruta1 = banana
// fruta2 = Uva

const useQuadrado = [
  4,
  function (lado) {
    return 4 * lado;
  },
];
const [lados, area] = useQuadrado;
//area(4) = 16

//Rest e Spread
//Rest
function showList(empresa, ...clients) {
  clients.forEach((client) => {
    console.log(client, empresa);
  });
}

showList("Google", "André", "Pedro", "João");

//Spread
// Arrays
const numeros = [1, 4, 9, 2, 3, 6, 20];
Math.max(...numeros); // retorna 20

// Transformar ArrayLike and Array
const items = document.querySelectorAll("li");

// items.map() não existe, agora [...items]
// é uma nova array, com cada elemento de items.
[...items].map((item) => (item.innerText = "Teste"));

// Objetos
const carro = {
  cor: "azul",
  portas: 4,
  ano: 2020,
};

const cloneCarro = { ...carro };
const carroEsportivo = { turbo: true, ...carro };

//Module
//Os módulos servem para quebrarmos o código em diferente arquivos, para facilitar a organização e compartilhamento de código comum.
// Só funciona em servidor, seja local ou online.
//Não irá funcionar se você abrir o html direto
//<script type="module" src="./script.js"></script>;

// quadrado.js
export function areaQuadrado(l) {
  return l * l;
}

export function perimetroQuadrado(l) {
  return 4 * l;
}

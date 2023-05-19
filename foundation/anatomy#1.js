// Function declaration

//1- Só retorna se for chamada fora do escopo da função.
//função sem argumneto => (), parênteses vazio.
function sayHello() {
  console.log('Hello!')
}

sayHello()

//2- Concatenando a saída da função usando template string.=> usa-se crase ``
function sayHelloTo(name) {
  console.log(`Hello ${name}`)
}

sayHelloTo('Kai')

//3- Usando a função para retornar um valor
function reurntHi() {
  return 'Hi!'
}
//A variável está recebendo a função - pode-se usar: var ,let ,const
let greeting = reurntHi()
console.log(greeting)

function returnHiTo(name) {
  return `Hi ${name}!`
}

console.log(returnHiTo('Tito'))

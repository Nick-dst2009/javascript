// 1. Crie uma variável chamada `nome` e atribua seu nome a ela. Exiba o nome no console.

let nome = "Nicoly"
console.log(nome)

// 2. Crie uma constante chamada `PI` e atribua o valor 3.14. Exiba o valor no console.

const PI = 3.14
console.log(PI)

// 3. Crie uma variável `idade`, atribua um valor e depois altere para um novo valor. Exiba ambos no console.

let idade = 14
let fezaniversario = idade + 1
console.log(idade, fezaniversario)


// 4. Crie duas variáveis de string, `primeiroNome` e `sobrenome`, e exiba o nome completo concatenado.

let primeiroNome = "Nicoly"
let sobrenome = "de Souza Turra"
console.log(primeiroNome + sobrenome)

// 5. Dada a string `mensagem = "Olá, mundo!"`, exiba a mensagem em letras maiúsculas.

let menssagem = "Olá Mundo"
console.log(menssagem.toUpperCase())

// 6. Crie um array com os nomes de três frutas e exiba o segundo elemento do array.

const frutas = ["Laranja" , "Bergamota" , "Melancia"]
const bergamota = frutas[1]
console.log(bergamota)

// 7. Crie um array com três números e adicione um novo número no final. Exiba o array atualizado.

let numeros = [1 , 2 , 3]
numeros.push(4)
console.log(numeros)

// 8. Crie duas variáveis, `a` e `b`, atribua valores numéricos a elas e exiba a soma.

let a = 10
let b = 5
console.log(a + b)

// 9. Calcule a média de três números armazenados em variáveis e exiba o resultado.

let numeroOne = 8
let numeroTwo = 7
let numberTres = 9
let media = (numeroOne + numeroTwo + numberTres) / 3
console.log(` O resultado da média é : ${media}`)




// 10. Crie uma variável `contador` inicializada em 0, incremente-a três vezes e exiba seu valor final.

let contador = 0
contador ++ 
contador ++
contador ++
console.log(contador)




// 11. Crie duas variáveis booleanas, `chuvendo` e `frio`, e use um operador lógico para verificar se deve levar um guarda-chuva.

let chuvendo = true
let frio = false
console.log("Preciso levar guarda - chuva?" ,  chuvendo || frio)


// 12. Crie uma variável `idade` e use um operador lógico para verificar se a pessoa pode dirigir (idade >= 18).

let idade1 = 16
console.log(idade1 >= 18)

// 13. Crie duas variáveis `x` e `y`, atribua valores diferentes e verifique se são iguais.

let x = 21
let y = 12
console.log(x === y)

// 14. Crie uma variável `idade` e verifique se a pessoa é maior de idade (idade >= 18) e exiba uma mensagem correspondente.

let idade2 = 20
console.log(idade2 >= 18 , ", Sim essa pessoa é maior de idade.")

// 15. Crie duas strings, `senha1` e `senha2`, e verifique se elas são iguais.

let senha1 = "Horse14202016"
let senha2 = "Ni20091505"
console.log("Essas senhas não são iguais?" , senha1 === senha2)

// 16. Crie uma string e exiba o número de caracteres que ela contém.

let numeroDeCaracteres = "Amar pode doer, mas amar a pessoa certa faz com que as feridas se transformem apenas em cicatrizes."
console.log(numeroDeCaracteres.length)

// 18. Crie uma variável numérica e verifique se é par ou ímpar usando um operador aritmético.

let number = 22

let ehPar = (number % 2 === 0)

console.log(`${number} eh par? ${ehPar}`)


// 19. Crie duas variáveis, `base` e `expoente`, e calcule a potência usando o operador de exponenciação.

let base = 3
let expoente = 3 
let resultado =  base ** expoente
console.log(resultado)

// 20. Crie duas variáveis, `nota1` e `nota2`, calcule a média e verifique se a média é maior ou igual a 7.
nota1 = 7
nota2 = 10
media = (nota1 + nota2) / 2
console.log(`média é: ${media}`) 
console.log("A média é maior que ou igual a 7?" , media >= 7)





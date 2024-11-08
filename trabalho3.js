// 1. Crie uma função que receba um número e retorne a soma de todos os números de 1 até o número informado usando um laço `while`.


// Exemplo de chamada:
// console.log(somaAteNumero(5));  // 15 (1+2+3+4+5)

let i = 1
let soma = 0
function somaAteNumero(numero) {

    while (i <= numero) {
        soma += i
        i++
    }
    return soma
}

console.log(somaAteNumero(5))

// 2. Crie uma função que receba um array de números e retorne a soma de todos os números maiores que 10 usando um laço `for`.


// Exemplo de chamada:
// console.log(somaMaiorQueDez([5, 15, 3, 20, 7]));  // 35 (15 + 20)

function somaMaiorQueDez(numeros) {
    let soma = 0
    for (let i = 0; i < numeros.length; i++) {

        if (numeros[i] > 10) {
            soma += numeros[i]
        }


    }
    return soma
}

console.log(somaMaiorQueDez([5, 15, 3, 20, 7]))

// 3. Crie uma função que, dado um array de filmes, retorne o nome do primeiro filme cujo título tem mais de 5 letras usando o `for...of`.


// Exemplo de chamada:
// console.log(filmeMaiorQueCincoLetras(["O Rei Leão", "Naruto", "Avengers", "Star Wars"]));  // "Avengers"

function filmeMaiorQueCincoLetras(filmes) {
    for (let filme of filmes) {

        if (filme.length > 5) {
            console.log(filme)
        }
    }
}

filmeMaiorQueCincoLetras(["O Rei Leão", "Naruto", "Avergers", "Stars Wars"])

// 4. Crie uma função que receba um array de nomes de personagens de 
//*Hunter x Hunter* com os personagens "Gon Freecss", "Killua Zoldyck", "Leorio Paradinight" e um array 
//de números representando a força de cada personagem, respectivamente 180, 195, 140.
// A função deve retornar um terceiro array com o nome dos personagens cuja força seja superior a 150, utilizando um laço `for`.


// Exemplo de chamada:
const nomes = ["Gon Freecss", "Killua Zoldyck", "Leorio Paradinight"];
const forcas = [180, 195, 140];

function personagemComForcaSuperiorA100(nomes, forcas) {
    let personagensMaisFortes = []
    for (let i = 0; i < nomes.length; i++) {

        if (forcas[i] > 150) {
            personagensMaisFortes.push(nomes[i])
        }
    }
    return personagensMaisFortes
}

console.log(personagemComForcaSuperiorA100(nomes, forcas))

//console.log(personagemComForcaSuperiorA100(nomes, forcas));

// 5. Crie uma função que receba um array de números e retorne a quantidade de números negativos presentes no array, usando um laço `while`.
// Exemplo de chamada:
// console.log(contarNegativos([3, -2, -5, 7, 0, -1]));  // 3

function contarNumerosNegativos(numeros) {
    let i = 0
    let negativos = 0
    while (i < numeros.length) {

        if (numeros[i] < 0) {
            negativos++
        }

        i++
    }
    return negativos
}

console.log(contarNumerosNegativos([3, -2, -5, 7, 0, -1]))

// 6. Crie uma função que receba uma string, converta-a para um array e retorne a quantidade de vezes que a letra "a" aparece nela.


// Exemplo de chamada:
// console.log(contarLetraA("Naruto é um anime top!"));  // 4

let numerosDeA = 0
function contarLetraA(string) {
    string.split("")
    if (string.length = "a") {
        numerosDeA++
    }
    return numerosDeA
}

console.log(contarLetraA("Demon Slayer é um anime top!"))

// 7. Crie uma função que percorra um array de filmes e retorne um novo array com os 
//filmes que têm o nome começando com a letra "S" usando o laço `for...of`.


// Exemplo de chamada:
// console.log(filmesComLetraS(["Star Wars", "Superman", "Shrek", "Batman"]));  // ["Star Wars", "Superman", "Shrek"]


function filmesComLetrasS(titulos) {

    let titulosComecadosEmS = []

    for (let filme of titulos) {

        if (filme[0] === "S") {
            titulosComecadosEmS.push(filme)
        }
    }
    return titulosComecadosEmS
}
console.log(filmesComLetrasS(["Star Wars", "Superman", "Shrek", "Batman", "A Culpa é das estrelas", "A Cinco Passos de Você"]))

// 8. Crie uma função que receba um array de strings e retorne a maior substring (palavra) encontrada no array.


// Exemplo de chamada:
// console.log(maiorSubstring(["João", "Maria", "Alexandre", "Carlos"]));  // "Alexandre"

function maiorSubstring(nomes) {

    let nomeMaior = ""
    for (let i = 0; i < nomes.length; i++) {
        let nomeAtual = nomes[i]

        if (nomeAtual.length > nomeMaior.length) {
            nomeMaior = nomeAtual
        }
    }
    return nomeMaior

}

console.log(maiorSubstring(["João", "Maria", "Alexandre", "Carlos", "Elisangela", "Nicoly"]))



// 9. Crie uma função que calcule o fatorial de um número utilizando um laço `for`.


// Exemplo de chamada:
// console.log(fatorial(5));  // 120 (5 * 4 * 3 * 2 * 1)

/*function fatorial(numero) {
    multiplicadores = 1
    for (let i = 0; i <= numero; i++) {
        numero * multiplicadores
    } if (multiplicadores > 6) {
        multiplicadores - 1
    }
    return multiplicadores
}*/

function fatorial(numero) {
    let acumulador = 1
    for (let i = numero; i > 0; i--) {
        acumulador = acumulador * i
    }
    return acumulador
}

console.log(fatorial(10))





// 10. Crie uma função que receba um número e retorne uma string que contém esse número repetido, separado por vírgulas, utilizando um laço `while`.


// Exemplo de chamada:
// console.log(repetirNumero(7, 4));  // "7, 7, 7, 7" 

function repetirNumero(numero, vezes) {
    let stringDeSete = ""
    let i = 0
    while (i < vezes) {
        if (i > 0) {
        stringDeSete += " , "
        }
        stringDeSete += numero
        i++
    }
    return stringDeSete
}

console.log(repetirNumero(7, 4))
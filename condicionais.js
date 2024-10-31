// 1. Par ou Ímpar
// Crie uma função chamada `parOuImpar` que recebe um número (tipo: Number).
// Utilize o operador de mod (%) e uma estrutura condicional `if` para retornar "Par" ou "Ímpar".

function parOuImpar(numero) {
    if (numero % 2 === 0) {
        console.log("O número é par.")
    } else {
        console.log("O numero é.")
    }
}
parOuImpar(4)


// 2. Maior de Três
// Crie uma função chamada `maiorDeTres` que recebe três números (tipo: Number).
// Crie uma lógica de programação para retornar o maior número.

function maiorDeTres(num1, num2, num3) {
    if (num1 > num2, num1 > num3) {
        console.log("O número que é maior é o primeiro.")
    }
    else if (num2 > num1, num2 > num3) {
        console.log("O número maior é o segundo.")
    }
    else {
        console.log("O número maior é o terceiro.")
    }
}
maiorDeTres(3, 10, 8)
maiorDeTres(20, 5, 10)


// 3. Verificação de Idade
// Crie uma função chamada `verificaIdade` que recebe a idade (tipo: Number).
// Utilize uma estrutura condicional `if` para retornar "Menor de idade" ou "Maior de idade".

function verificaIdade(idade) {
    if (idade >= 18) {
        console.log("Maior de idade")
    }
    else {
        console.log("Menor de idade")
    }
}
verificaIdade(13)
verificaIdade(24)


// 4. Classificação de Notas
// Crie uma função chamada `classificaNota` que recebe uma nota (tipo: Number).
// Utilize `if`, `else if` e `else` para retornar "Aprovado", "Recuperação" ou "Reprovado".

function classificaNota(nota) {
    if (nota >= 7) {
        console.log("Aprovado")
    } else if (nota === 6) {
        console.log("Recuperação")
    } else {
        console.log("Reprovado")
    }
}
classificaNota(5)
classificaNota(8)
classificaNota(4)
classificaNota(6)



// 5. Dia da Semana
// Crie uma função chamada `diaDaSemana` que recebe um número (tipo: Number) de 1 a 7.
// Utilize uma estrutura `switch` para retornar o nome do dia da semana correspondente.

function diaDaSemana(numero) {
    switch (numero) {
        case 1:
            console.log("Domingo")
            break
        case 2:
            console.log("Segunda - Feira")
            break
        case 3:
            console.log("Terça - Feira")
            break
        case 4:
            console.log("Quarta - Feira")
            break
        case 5:
            console.log("Quinta - Feira")
            break
        case 6:
            console.log('Sexta - Feira')
            break
        case 7:
            console.log("Sábado")
            break
        default:
            console.log("Não existe este dia da semana.")
    }
}
diaDaSemana(7)
diaDaSemana(8)
diaDaSemana(3)




// 6. Classificação de Animal
// Crie uma função chamada `classificaAnimal` que recebe uma string representando um animal dentre os seguintes: cachorro, gato, passarinho, salmão, lagarto.
// Utilize uma estrutura `switch` para retornar se é "Mamífero", "Ave", "Anfíbio", "Peixe".

function classificaAnimal(animal) {
    switch (animal.toUpperCase()) {
        case "CACHORRO":
            console.log("O animal é um mamífero.")
            break
        case "GATO":
            console.log("O animal é um mamífero.")
            break
        case "PASSARINHO":
            console.log("O animal é uma ave.")
            break
        case "SALMÃO":
            console.log(" O animal é um peixe")
            break
        case "LAGARTO":
            console.log("O animal é um anfíbio")
            break
        default:
            console.log("Animal não identificado")
    }
}
classificaAnimal('gato')
classificaAnimal("cachorro")
classificaAnimal('lagarto')


// 7. Calculadora Simples
// Crie uma função chamada `calculadora` que recebe dois números e uma string representando uma operação (soma, subtração, multiplicação, divisão).
// Utilize uma estrutura `switch` para retornar o resultado da operação.

function calculadora(num1, operação, num2) {
    let resultado
    switch (operação) {
        case "+":
            resultado = num1 + num2
            console.log(resultado)
            break

        case "-":
            resultado = num1 - num2
            console.log(resultado)
            break

        case "/":
            resultado = num1 / num2
            console.log(resultado)
            break

        case "*":
            resultado = num1 * num2
            console.log(resultado)
            break
    }
    return resultado
}

calculadora(10, "+", 10)
calculadora(15, "-", 5)
calculadora(10 , "/" , 5)
calculadora(5 , "*" , 5)


// 9. Mensagem de Boas-Vindas
// Crie uma função chamada `mensagemBoasVindas` que recebe um nome (tipo: String) e um horário (tipo: Number).
// Utilize uma estrutura condicional `if`, `else if` e `else` para retornar uma mensagem apropriada: "Bom dia", "Boa tarde" ou "Boa noite".

function mensagemBoasVindas(nome, horario) {
    if (horario >= 1 && horario < 12) {
        console.log(`Seja bem-vindo ${nome}, Bom dia!`)

    } else if (horario >= 13 && horario < 18) {
        console.log(`Seja be-vindo ${nome}, Boa tarde! `)
    } else {
        console.log(`Seja bem-vido ${nome}, Boa noite!`)
    }

}
mensagemBoasVindas("Nicoly", 7)
mensagemBoasVindas("Leonardo", 14)
mensagemBoasVindas("Eduardo", 22)


// 10. Classificação de Filmes
// Crie uma função chamada `classificaFilme` que recebe uma nota (tipo: Number) de um filme.
// Utilize uma estrutura condicional `if`, `else if` e `else` para retornar "Excelente" (nota 8 ou mais),
// "Bom" (nota de 5 a 7) ou "Ruim" (nota abaixo de 5).

function classificaFilme(nome, nota) {
    if (nota >= 8) {
        console.log(`${nome} recebeu a nota ${nota} e eh exelente.`)
    } else if (nota < 8 && nota >= 5) {
        console.log(`${nome} recebeu nota ${nota} e eh bom.`)
    } else {
        console.log(`${nome} rcebeu nota ${nota} e eh ruim.`)
    }
}

classificaFilme("Pânico", 3)
classificaFilme("Shrek", 8)
classificaFilme("Dora", 5)

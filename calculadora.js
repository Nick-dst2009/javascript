const ask = require('readline-sync')

let sustentaMenu = true

while (sustentaMenu) {
    console.clear()

    console.log(`
    [1] - calcular
    [2] - sair
    `)

    let opcaoEscolhida = Number(ask.question("Digite a opcao desejada:  "))

    switch (opcaoEscolhida) {
        case 1:
            console.clear()
            console.log(`
     [1] - adicao
     [2] - subtracao
     [3] - multiplicacao
     [4] - divisao
     [5] - mod
        `)



            let operacaoDesejada = Number(ask.question("Digite a operacao desejada:  "))

            let n1 = Number(ask.question("Digite o primeiro numero   "))
            let n2 = Number(ask.question("Digite o segundo numero    "))
            let resultado
            console.clear()

            switch (operacaoDesejada) {


                case 1:

                    resultado = n1 + n2
                    console.log(`${n1} + ${n2} = ${resultado}`)
                    break

                case 2:
                    resultado = n1 - n2
                    console.log(`${n1} - ${n2} = ${resultado}`)
                    break


                case 3:
                    resultado = n1 * n2
                    console.log(`${n1} * ${n2} = ${resultado}`)
                    break

                case 4:
                    resultado = n1 / n2
                    console.log(`${n1} / ${n2} = ${resultado}`)
                    break


                case 5:
                    resultado = n1 % n2
                    console.log(`${n1} % ${n2} = ${resultado}`)
                    break


                default:
                    console.log("Opção invalida")
                    break
            }
            ask.question("Tecle ENTER para continuar...")
            break

        case 2:
            console.log("Voce saiu")
            sustentaMenu = false

            break
        default:
            console.log("Opcao invalida")
            break
    }

}
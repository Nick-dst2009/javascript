const ask = require('readline-sync')

let sustentaMenu = true 
//esta variavel recebe o valor true e enquanto ela ser verdadeira serve para manter o codigo em funcionamento.



while (sustentaMenu) {//este laço esta recebendo a condicao de que enquanto a variavl sustentaMenu for verdadeira vai primeiramente limpar o terminal para despoluir 
    console.clear()    //e depois mostrar para o usuario o menu de opcoes para o usuario.


    console.log(`
     ▄████████    ▄████████  ▄█        ▄████████ ███    █▄   ▄█          ▄████████ ████████▄   ▄██████▄     ▄████████    ▄████████ 
    ███    ███   ███    ███ ███       ███    ███ ███    ███ ███         ███    ███ ███   ▀███ ███    ███   ███    ███   ███    ███ 
    ███    █▀    ███    ███ ███       ███    █▀  ███    ███ ███         ███    ███ ███    ███ ███    ███   ███    ███   ███    ███ 
    ███          ███    ███ ███       ███        ███    ███ ███         ███    ███ ███    ███ ███    ███  ▄███▄▄▄▄██▀   ███    ███ 
    ███        ▀███████████ ███       ███        ███    ███ ███       ▀███████████ ███    ███ ███    ███ ▀▀███▀▀▀▀▀   ▀███████████ 
    ███    █▄    ███    ███ ███       ███    █▄  ███    ███ ███         ███    ███ ███    ███ ███    ███ ▀███████████   ███    ███ 
    ███    ███   ███    ███ ███▌    ▄ ███    ███ ███    ███ ███▌    ▄   ███    ███ ███   ▄███ ███    ███   ███    ███   ███    ███ 
    ████████▀    ███    █▀  █████▄▄██ ████████▀  ████████▀  █████▄▄██   ███    █▀  ████████▀   ▀██████▀    ███    ███   ███    █▀  
                            ▀                               ▀                                              ███    ███              
    ████████▄     ▄████████      ███▄▄▄▄    ▄█   ▄████████  ▄██████▄   ▄█       ▄██   ▄                                            
    ███   ▀███   ███    ███      ███▀▀▀██▄ ███  ███    ███ ███    ███ ███       ███   ██▄                                          
    ███    ███   ███    ███      ███   ███ ███▌ ███    █▀  ███    ███ ███       ███▄▄▄███                                          
    ███    ███   ███    ███      ███   ███ ███▌ ███        ███    ███ ███       ▀▀▀▀▀▀███                                          
    ███    ███ ▀███████████      ███   ███ ███▌ ███        ███    ███ ███       ▄██   ███                                          
    ███    ███   ███    ███      ███   ███ ███  ███    █▄  ███    ███ ███       ███   ███                                          
    ███   ▄███   ███    ███      ███   ███ ███  ███    ███ ███    ███ ███▌    ▄ ███   ███                                          
    ████████▀    ███    █▀        ▀█   █▀  █▀   ████████▀   ▀██████▀  █████▄▄██  ▀█████▀    
    `)
    console.log(`
    [1] - calcular
    [2] - sair
    `)

    let opcaoEscolhida = Number(ask.question("Digite a opcao desejada:  ")) // esta variavel serve para guardar a opcao que o usuario escolheu no menu de opcoes.
    //esta variavel esta armazenando a opcao, tipo number, que o usuario escolheu (calcular ou sair).

    switch (opcaoEscolhida) {  // aqui usei esta condicional que, de acordo com a opcao escolhida, ira mostrar o menu de operacoes ou sair e encerrar o codigo.
        case 1:          //se a opcao escolhida for 1 (calcular) ira limpar mnovamente o terminal e ira mostrar o menu de operacoes para o usuario.
            console.clear() 
            console.log(`
     ▄████████    ▄████████  ▄█        ▄████████ ███    █▄   ▄█          ▄████████ ████████▄   ▄██████▄     ▄████████    ▄████████ 
    ███    ███   ███    ███ ███       ███    ███ ███    ███ ███         ███    ███ ███   ▀███ ███    ███   ███    ███   ███    ███ 
    ███    █▀    ███    ███ ███       ███    █▀  ███    ███ ███         ███    ███ ███    ███ ███    ███   ███    ███   ███    ███ 
    ███          ███    ███ ███       ███        ███    ███ ███         ███    ███ ███    ███ ███    ███  ▄███▄▄▄▄██▀   ███    ███ 
    ███        ▀███████████ ███       ███        ███    ███ ███       ▀███████████ ███    ███ ███    ███ ▀▀███▀▀▀▀▀   ▀███████████ 
    ███    █▄    ███    ███ ███       ███    █▄  ███    ███ ███         ███    ███ ███    ███ ███    ███ ▀███████████   ███    ███ 
    ███    ███   ███    ███ ███▌    ▄ ███    ███ ███    ███ ███▌    ▄   ███    ███ ███   ▄███ ███    ███   ███    ███   ███    ███ 
    ████████▀    ███    █▀  █████▄▄██ ████████▀  ████████▀  █████▄▄██   ███    █▀  ████████▀   ▀██████▀    ███    ███   ███    █▀  
                            ▀                               ▀                                              ███    ███              
    ████████▄     ▄████████      ███▄▄▄▄    ▄█   ▄████████  ▄██████▄   ▄█       ▄██   ▄                                            
    ███   ▀███   ███    ███      ███▀▀▀██▄ ███  ███    ███ ███    ███ ███       ███   ██▄                                          
    ███    ███   ███    ███      ███   ███ ███▌ ███    █▀  ███    ███ ███       ███▄▄▄███                                          
    ███    ███   ███    ███      ███   ███ ███▌ ███        ███    ███ ███       ▀▀▀▀▀▀███                                          
    ███    ███ ▀███████████      ███   ███ ███▌ ███        ███    ███ ███       ▄██   ███                                          
    ███    ███   ███    ███      ███   ███ ███  ███    █▄  ███    ███ ███       ███   ███                                          
    ███   ▄███   ███    ███      ███   ███ ███  ███    ███ ███    ███ ███▌    ▄ ███   ███                                          
    ████████▀    ███    █▀        ▀█   █▀  █▀   ████████▀   ▀██████▀  █████▄▄██  ▀█████▀    
    `)
            console.log(`
     [1] - adicao
     [2] - subtracao
     [3] - multiplicacao
     [4] - divisao
     [5] - mod
        `)



            let operacaoDesejada = Number(ask.question("Digite a operacao desejada:  ")) // esta variavel armazena a operacao escolhida pelo usuario.

            let n1 = Number(ask.question("Digite o primeiro numero   ")) //esta variavel pergunta e armazena o primeiro numero para ser realizada a operacao.
            let n2 = Number(ask.question("Digite o segundo numero    ")) // e esta pergunta e armazena o segundo numero.
            let resultado // aqui declarei uma nova variavel que futuramente armazenará o resultado da operacao realizada.
            console.clear() //depois disso, aproveitando a pausa do codigo, este console.clear limpara as informacoes que ja nao sao mais necessarias para o usuario

            switch (operacaoDesejada) { /* dentro desta mesma condicional eu criei outra condicional que de acordo com a operacao desejada 
            e a opcao escolhida irá  executar o que as cases estao  ordenando.*/


                case 1: /* se a opcao escolhida for 1 (adicao) a variavel resultado recebera a soma do primeiro numero com o segundo nemero. 
                Depois vai imprimir no terminal a operacao com o resultado  por extenso.
                */

                    resultado = n1 + n2
                    console.log(`${n1} + ${n2} = ${resultado}`)
                    break

                case 2:  /* se a opcao escolhida for 2 (subtracao) a variavel resultado recebera a subtracao do primeiro numero com o segundo nemero. 
                Depois vai imprimir no terminal a operacao com o resultado por extenso.
                */
                    resultado = n1 - n2
                    console.log(`${n1} - ${n2} = ${resultado}`)
                    break


                case 3:  /* se a opcao escolhida for 3 (multiplicacao) a variavel resultado recebera a multiplicacao do primeiro numero com o segundo nemero. 
                Depois vai imprimir no terminal a operacao com o resultado por extenso.
                */
                    resultado = n1 * n2
                    console.log(`${n1} * ${n2} = ${resultado}`)
                    break

                case 4:  /* se a opcao escolhida for 4 (divisao) a variavel resultado recebera a divisao do primeiro numero com o segundo nemero. 
                Depois vai imprimir no terminal a operacao com o resultado por extenso.
                */
                    resultado = n1 / n2
                    console.log(`${n1} / ${n2} = ${resultado}`)
                    break


                case 5:  /* se a opcao escolhida for 5 (mod) a variavel resultado recebera o mod do primeiro numero com o segundo nemero. 
                Depois vai imprimir no terminal por extenso.
                */
                    resultado = n1 % n2
                    console.log(`${n1} % ${n2} = ${resultado}`)
                    break


                default: //isso serve para se a opcao escolhida nao existir
                    console.log("Opção invalida")
                    break
            }
            ask.question("Tecle ENTER para continuar...")  // isso informa ao usuario para ele clicar ENTER se quiser continuar
            break

        case 2:  /*aqui se a opcao 2 da condicional principal for escolhida (sair), 
        a variavel que literalmente sustenta o menu tera o seu valor falso, assim encerrando o codigo e mostrando no terminal a mensagem "voce saiu". */
           
        console.log("Voce saiu")
            sustentaMenu = false

            break
        default:  //isso serve para se a opcao escolhida nao existir
            console.log("Opcao invalida")
            break
    }

}
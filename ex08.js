import { question } from "readline-sync"

function eh_igual_somanumeros(numero_x){
    let numero1 = pegar_numero('Insira um numero:')
    let numero2 = pegar_numero('Insira um numero:')
    while(numero1+numero2 !== numero_x){
        numero1 = numero2
        numero2 = pegar_numero('Insira outro numero: ')
    }
    return [numero1, numero2]
}

function print(mensagem){
    return console.log(mensagem)
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    const numero_x = pegar_numero('Insira um número a ser a variável x: ')

    const verificação_lista = eh_igual_somanumeros(numero_x)

    print(`
    ===================================================
    Olá!
    A soma dos números ${verificação_lista[0]} e ${verificação_lista[1]}
    é igual ao número ${numero_x}
    ===================================================
    `)
}
main()
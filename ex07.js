import { question } from "readline-sync"

function print(mensagem){
    return console.log(mensagem)
}

function qual_numeroigual(numero){
    let novo_numero = pegar_numero('Insira um novo numero: ')
    while(novo_numero !== numero){
        novo_numero = pegar_numero('Insira um novo numero: ')
    }
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    const numero = pegar_numero('Insira um número: ')

    const numero_igual = qual_numeroigual(numero)

    print(`Olá, o último número digitado é igual ao primeiro número!`)
}
main()
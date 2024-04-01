import { question } from "readline-sync"

function divisoes_sucessivas(numero){
    while(numero >= 1){
        numero = numero/2
    }
    return numero
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    let numero = pegar_numero('Insira um número: ')

    const resultado_divisoes = divisoes_sucessivas(numero)

    console.log(`
    ============================================================
    Olá! o seu número dividido sucessivamente por 2
    até ser menor que 1 tem como última divisão: ${resultado_divisoes}
    ============================================================
    `)
}
main()
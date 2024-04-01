import { question } from "readline-sync"

function print(mensagem){
    return console.log(mensagem)
}

function verificar_digitos(numero){
    let contador_digitos = 0
    while(numero%10>0){
        numero = Math.trunc(numero/10)
        contador_digitos ++
    }
    return contador_digitos
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    let numero = pegar_numero('Insira um número: ')

    const verificação_digitos = verificar_digitos(numero)

    print(`
    ===================================================
    Olá! O número ${numero} contem ${verificação_digitos} dígitos
    ===================================================
    `)
}
main()
import { question } from "readline-sync"

function calcular_mdc(num1, num2){
    let numero_maior = Math.max(num1, num2)
    let numero_menor = Math.min(num1, num2)
    while(numero_maior%numero_menor > 0){
        numero_menor = (numero_maior%numero_menor)
        numero_maior = numero_menor
    }
    return numero_menor
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    const num1 = pegar_numero('Digite o primeiro número para ser calculado: ')
    const num2 = pegar_numero('Digite o segundo número para ser calculado: ')

    const resultado_mdc = calcular_mdc(num1, num2)

    console.log(resultado_mdc)
}
main()
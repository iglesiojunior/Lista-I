import { question } from "readline-sync"

function print(mensagem){
    return console.log(mensagem)
}

function dividir_entresi(numero_x, numero_n){
    let X = numero_x
    let N = numero_n
    while(N > 2){
        X = X/N
        N -= 1
    }
    return X
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    const numero_x = pegar_numero('Insira o número X: ')
    const numero_n = pegar_numero('Insira o número N: ')

    const resultado_final = dividir_entresi(numero_x, numero_n)

    print(resultado_final)
}
main()
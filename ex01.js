import { question } from "readline-sync"

function print(mensagem){
    return console.log(mensagem)
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    let numero = 1

    while(numero !== 0){
        numero = pegar_numero('Insira um novo numero:')
        let divisores = 0
        print('A sua lista de divisores é igual a:')
        while(divisores <= numero){
            if(numero%divisores === 0){
                print(`O número ${divisores} é um divisor`)
                divisores++
            }else{
                divisores++
            }
        }
    }
}
main()
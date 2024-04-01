import { question } from "readline-sync"

function calcular_mmc(num1, num2){
    let resultado = 1
    let minimo1 = num1
    let minimo2 = num2
    while (minimo1 > 1 && minimo2 > 1){
        if(minimo1%2 === 0){
            if(minimo2%2 === 0){
                minimo1/=2
                minimo2/=2
                resultado*=2
            }
            minimo1/=2
            resultado*=2
        }else{
            if(minimo2%2 === 0){
                minimo2/=2
                resultado*=2}
        } 
        
        if(minimo1%3 === 0){
            if(minimo2%3 === 0){
                minimo1/=3
                minimo2/=3
                resultado*=3
            }
            minimo1/=3
            resultado*=3
        }else{
            if(minimo2%3 === 0){
                minimo2/=3
                resultado*=3}
        }
        
        if(minimo1%5 === 0){
            if(minimo2%5 === 0){
                minimo1/=5
                minimo2/=5
                resultado*=5
            }
            minimo1/=5
            resultado*=3
        }else{
            if(minimo2%5 === 0){
                minimo2/=5
                resultado*=5}
        } 
        if(minimo1%7 === 0){
            if(minimo2%7 === 0){
                minimo1/=7
                minimo2/=7
                resultado*=7
            }
            minimo1/=7
            resultado*=7
        }else{
            if(minimo2%7 === 0){
                minimo2/=7
                resultado*=7
            }
        } 
        if(minimo1%11 === 0){
            if(minimo2%11 === 0){
                minimo1/=11
                minimo2/=11
                resultado*=11
            }
            minimo1/=11
            resultado*=11
        }else{
            if(minimo2%11 === 0){
                minimo2/=11
                resultado*=11
            }
        }
    }
    return resultado
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    const num1 = pegar_numero('Digite o primeiro número para ser calculado: ')
    const num2 = pegar_numero('Digite o segundo número para ser calculado: ')

    const resultado_mmc = calcular_mmc(num1, num2)

    console.log(resultado_mmc)
}
main()
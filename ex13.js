import { question } from "readline-sync"

function mostrar(mensagem){
    return console.log(mensagem)
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    let salario
    let soma_salarios_brutos = 0
    let soma_salarios_reajuste = 0
    let reajuste = 0
    while((salario = pegar_numero('Insira o salário a ser reajustado: ')) != 0){
        if(salario <= 2999.99){
            soma_salarios_brutos += salario
            reajuste = salario*1.25
            soma_salarios_reajuste += reajuste
            mostrar(`Seu novo salário terá um reajuste de 25% e será: ${reajuste.toFixed(2)}`)
        }else if(salario <= 5999.99){
            soma_salarios_brutos += salario
            reajuste = salario*1.20
            soma_salarios_reajuste += reajuste
            mostrar(`Seu novo salário terá um reajuste de 20% e será: ${reajuste.toFixed(2)}`)
        }else if(salario <= 9999.99){
            soma_salarios_brutos += salario
            reajuste = salario*1.15
            soma_salarios_reajuste += reajuste
            mostrar(`Seu novo salário terá um reajuste de 15% e será: ${reajuste.toFixed(2)}`)
        }else{
            soma_salarios_brutos += salario
            reajuste = salario*1.10
            soma_salarios_reajuste += reajuste
            mostrar(`Seu novo salário terá um reajuste de 10% e será: ${reajuste.toFixed(2)}`)
        }
        mostrar(`
        A soma dos salários brutos até o momento é de: ${soma_salarios_brutos.toFixed(2)}
        A soma dos salários reajustados até o momento é de: ${soma_salarios_reajuste.toFixed(2)}
        A soma dos reajustes é de: ${(soma_salarios_reajuste-soma_salarios_brutos).toFixed(2)}
        `)
        mostrar('==========================================================================================')
        
    }
}
main()
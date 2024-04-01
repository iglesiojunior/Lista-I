import {question} from 'readline-sync'

function detalhes_competidores(qtd_nadadores){
    let pontuação_clube_a = 0
    let pontuação_clube_b = 0
    let contador = 1
    while(contador >= qtd_nadadores ){
        const nome = question(`Insira o nome do competidor ${contador}`)
        const classificação = pegar_numero(`Insira a classificação do ${nome}`)
        const clube = question(`Insira o clube do competidor(a ou b): `)
        if(clube === 'a'){
            if(classificação === 1){
                pontuação_clube_a+=9
            }else if(classificação === 2){
                pontuação_clube_a+=6
            }else if(classificação === 3){
                pontuação_clube_a+=4
            }else if(classificação === 4){
                pontuação_clube_a+=3
            }
        }else if(clube === 'b'){
            if(classificação === 1){
                pontuação_clube_a+=9
            }else if(classificação === 2){
                pontuação_clube_a+=6
            }else if(classificação === 3){
                pontuação_clube_a+=4
            }else if(classificação === 4){
                pontuação_clube_a+=3
            }
        }
        contador++
    }
    return[pontuação_clube_a, pontuação_clube_b]
    
}

function mostrar(mensagem){
    return console.log(mensagem)
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    let qtd_provas = 0
    let qtd_nadadores = 0
    while(qtd_provas = pegar_numero('Insira o número da prova: ') != 0){
        qtd_provas++
        const nadadores = pegar_numero('Insira a qunatidade de nadadores da prova: ')
        qtd_nadadores += nadadores
    }
    const classificação_final = detalhes_competidores(qtd_nadadores)
    if(classificação_final[0] > classificação_final[1]){
        mostrar(`
        Valores de cada time:
        clube A = ${classificação_final[0]}
        clube B = ${classificação_final[1]}
        vencedor: Clube A!!
        `)
    }else{
        mostrar(`
        Valores de cada time:
        clube A = ${classificação_final[0]}
        clube B = ${classificação_final[1]}
        vencedor: Clube B!!
        `)
    }
}   
main()
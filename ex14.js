import { question } from "readline-sync"

function calcular_resultado(Rogério, Ricardo, Ezequiel, Indecisos, outros,Nulos,qtd_eleitores){
    const percentual_rogerio = (Rogério/qtd_eleitores)*100
    const percentual_ricardo = (Ricardo/qtd_eleitores)*100
    const percentual_ezequiel = (Ezequiel/qtd_eleitores)*100
    const percentual_indecisos = (Indecisos/qtd_eleitores)*100
    const percentual_outros = (outros/qtd_eleitores)*100
    const percentual_nulos = (Nulos/qtd_eleitores)*100
    let segundo_turno = ''
    const ganhador = Math.max(Rogério, Ricardo, Ezequiel, outros)
    if(percentual_rogerio > 50|| percentual_ezequiel > 50 || percentual_outros > 50 || percentual_ricardo > 50){
        segundo_turno = 'Não'
    }else{
        segundo_turno = 'sim'
    }
    const resultado_final = `
    ============================================
    Resultado IFPI 2024
    Candidatos:          Porcentagem de votos:
    Rogério              ${percentual_rogerio}
    Ricardo              ${percentual_ricardo}
    Ezequiel             ${percentual_ezequiel}
    Outros               ${percentual_outros}
    votadores indecisos  ${percentual_indecisos}
    votos nulos          ${percentual_nulos}
    Total entrevistados  ${(qtd_eleitores)-1}
    
    Vencedor primeiro turno: ${ganhador}
    Possibilidade de segundo turno? ${segundo_turno}
    =============================================
    `
    return resultado_final
}

function mostrar(mensagem){
    return console.log(mensagem)
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    let votos
    let qtd_eleitores = 0 
    let Rogério = 0
    let Ricardo = 0
    let Ezequiel = 0
    let Indecisos = 0
    let outros = 0
    let Nulos = 0
    while(votos !== -1){
        votos = pegar_numero( `
        Olá caro eleitor ${(qtd_eleitores+1)}!
        Insira um dos seguintes votos:
        45 - Rogério Silva
        13 - Ricardo Ramos
        23 - Ezequiel
        99 - Indeciso
        98 - outros
        0 - nulo/branco
        -1 acabar votacao
    
        Seu voto: 
        `)
        qtd_eleitores++
        
        if(votos === 45){
            Rogério +=1
         }else if(votos === 13){
            Ricardo += 1
         }else if(votos === 23){
            Ezequiel += 1
         }else if(votos === 99){
            Indecisos+=1
         }else if(votos === 98){
            outros+=1
         }else if(votos === 0){
            Nulos+=1
         }

    }
    const resultado_urnas = calcular_resultado(Rogério, Ricardo, Ezequiel, Indecisos, outros,Nulos,qtd_eleitores)
    mostrar(resultado_urnas)

}
main()
import { question } from "readline-sync"

function mostrar(mensagem){
    console.log(mensagem)
}

function main(){
    let ponto 
    let contador_jogador1 = 0
    let contador_jogador2 = 0
    while(contador_jogador1 < 21 && contador_jogador2 < 21 || Math.abs(contador_jogador1-contador_jogador2)< 2){
        ponto = question('Insira qual jogador marcou(a ou b): ')
        if(ponto === 'a'){
            contador_jogador1++
        }else if(ponto === 'b'){
            contador_jogador2++
        }
        mostrar(`
        Placar atual:
        ${contador_jogador1}x${contador_jogador2}
        `)
    }
    if(contador_jogador1>contador_jogador2){
        mostrar(`O jogador 1 foi o ganhador por ${contador_jogador1} pontos!`)
    }else{
        mostrar(`O jogador 2 foi o ganhador por ${contador_jogador2} pontos!`)
    }
}
main()
import { question } from "readline-sync"

function calcular_combustivel(conteiners, passageiros){
    const peso_total = conteiners+(passageiros[0]*10)+passageiros[1]*70
    const calculo_combustível = (500000-peso_total)/1.5
    return calculo_combustível
}

function validar_voo(conteiners, passageiros){
    const peso_total = conteiners+(passageiros[0]*10)+passageiros[1]*70
    if(peso_total < 500000){
        return 'Autorizado para decolar'
    }else if(500000-peso_total < 15000){
        return 'Peso excedido, não vai ter espaço para o combustível'
    }else{
        return 'Pesado que nem a tais carla, nada de vôo'
    }
}

function mostrar(mensagem){
    return console.log(mensagem)
}

function informações_passageiros(){
    let bilhetes
    let quantidade_bagagens = 0
    let quantidade_pessoas = 0
    while((bilhetes = pegar_numero('Insira um número de bilhete: ')) !== 0){
        quantidade_bagagens += pegar_numero('Insira a quantidade de bagagens que possui: ')
        quantidade_pessoas ++
    }
    return [quantidade_bagagens, quantidade_pessoas]
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function valores_conteiners(){
    const pedir_containers = pegar_numero('Insira a quantidade de conteiners: ')
    let contador_containers = 0
    let peso_containers = 0
    while(contador_containers < pedir_containers){
        peso_containers += pegar_numero(`Insira o peso do container ${contador_containers+1} em kg: `)
        contador_containers++
    }
    return peso_containers
}

function main(){
    const conteiners = valores_conteiners()
    const passageiros = informações_passageiros()
    const validação_voo = validar_voo(conteiners, passageiros)
    const volume_combustivel = calcular_combustivel(conteiners, passageiros)

    mostrar(`
    ==================================================================
    Olá!, bem vindo ao relatório de voo da Timon Airlines
    O boing 777 tem como situação de vôo: ${validação_voo}
    quantidade de  passageiros: ${passageiros[1]}kg
    volume total da bagagem: ${passageiros[0]*10}kg
    peso total dos passageiros: ${passageiros[1]*70}kg
    peso de carga: ${conteiners}kg
    quantidade possível de combustível: ${volume_combustivel.toFixed(1)}litros
    ==================================================================
    `)
}
main()
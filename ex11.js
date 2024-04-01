import { question } from "readline-sync"

function mostrar(mensagem){
    return console.log(mensagem)
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function validação_notas(){
    let matrícula
    let nota1 = 0
    let nota2 = 0
    let nota3 = 0
    let alunos_aprovados = 0
    let alunos_reprovados = 0
    while(matrícula = pegar_numero("Insira o número de matrícula do aluno(0 para encerrar): ") !== 0){
        nota1 += pegar_numero('Insira a primeira nota: ')
        nota2 += pegar_numero('Insira a primeira nota: ')
        nota3 += pegar_numero('Insira a primeira nota: ')
        if((nota1*2+nota2*3+nota3*5)/10 < 7){
            alunos_reprovados++
        }else{
            alunos_aprovados++
        }
    }
    return[alunos_aprovados, alunos_reprovados]
}

function main(){
    const notas = validação_notas()
    
    mostrar(`
    =========================================
    -------------Relatório da turma----------
    Alunos aprovados: ${notas[0]}
    Alunos reprovados: ${notas[1]}
    Total de alunos na turma: ${notas[0]+notas[1]}
    =========================================
    `)
}
main()
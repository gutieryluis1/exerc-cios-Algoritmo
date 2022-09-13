/*Faça um algoritmo que leia o nome e as três notas de uma disciplina de um aluno e ao
final escreva o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média
para aprovação é igual ou superior a 8.*/

let nome = 'Gustavo'
nota1 = 0
nota2 = 8
nota3 = 8
let nGeral = (nota1 + nota2 + nota3) / 3 

if(nGeral >= 7) {
    console.log(`O aluno ${nome} foi aprovado com média ${nGeral}`)
} else {
    console.log(`O aluno ${nome} foi reprovado com média abaixo de 8 `)
}
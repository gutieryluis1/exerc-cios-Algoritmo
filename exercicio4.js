/*A partir do preço à vista de um determinado produto, calcule o preço total a pagar e o
valor da prestação mensal, referentes ao pagamento parcelado. Se o pagamento for
parcelado em 3 vezes deve ser dado um acréscimo de 10% no total a ser pago. Se o
parcelamento for em 5 vezes, o acréscimo será de 20%.
*/


let valor = 1500
let vAcrescimo

const num = prompt('Enter a number: ');
console.log('Your number + 4 =');
console.log(Number(num) + 4);

if(valor / 3){
    vAcrescimo = valor + (valor * 0.1)
    console.log(`O valor do produto é ${vAcrescimo}`)
    return vAcrescimo
} else if(valor / 5){
    vAcrescimo = valor + (valor * 0.2)
    console.log(`O valor do produto é ${vAcrescimo}`)
    return vAcrescimo
}
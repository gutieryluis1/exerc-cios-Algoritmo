/*Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais devem
ser somado os dois, caso contrário multiplique A por B ao final do cálculo ao final do
cálculo atribuir o valor para uma variável C.*/

let a = 10
let b = 20
let c 

if(a == b) {
    c = a + b
    console.log(`${c}`)
    return c
} else {
    c = a * b
    console.log(`${c}`)
    return c
}


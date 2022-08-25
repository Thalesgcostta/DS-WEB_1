let nums = [2, -7, 8, 4, 0]

let minimo = Math.min(...nums)
let maximo = Math.max(...nums)

console.log({minimo, maximo})
console.log('Vetor "empacotado":', nums)
console.log('Vetor "espalhado":', ...nums)

let carro1 = {modelo: 'Fiorino', marca: 'Fiat', ano: 1984, cor: 'bege'}

let carro2 = carro1
carro2.marca = 'Chevrolet'
carro2.modelo = 'Opala'
carro2.cor = 'preto'
carro2.ano = 1979
console.log({carro1, carro2})

let frutas = ['maça', 'banana', 'laranja']
let verduras = ['alface', 'couve', 'rúcula']
let hortfruti = frutas.concat(verduras)
console.log({hortfruti})

console.log('Soma 7 números', soma(10, 12, 15, 18, 7, 2, 19))
console.log('Soma 15 números', soma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15))

function soma(...nums){
    let res = 0
    for(let num of nums) res += num
    return res
}

function calcular(oper, ...nums){
    let res
    if(oper === '+'){
        res = 0
        for(let num of nums) res += num
    }
else if(oper === '*'){
    res = 1
    for(let num of nums) res *= num
}
return res
}

console.log('Soma dos números de 1 a 5:', calcular('+', 1, 2, 3, 4, 5))
console.log('Produto dos números de 1 a 5:', calcular('*', 1, 2, 3, 4, 5))
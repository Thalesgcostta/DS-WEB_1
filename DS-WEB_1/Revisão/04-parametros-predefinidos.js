function calcular_area(base, altura, forma = 'R'){
    switch(forma){
        case 'R':
            return base * altura
        case 'T':
            return base * altura / 2
        case 'E':
            return (base / 2) * (altura / 2) * Math.PI
        default:
            return undefined
    }
}

console.log(`Área retângulo 10x25: ${calcular_area(10, 25, 'R')}`)
console.log(`Área triângulo 7.5x16.2: ${calcular_area(7.5, 16.2, 'T')}`)
console.log(`Área eclipse (círculo) 15x15: ${calcular_area(15, 15, 'E')}`)
console.log(`Área ???? 80x55: ${calcular_area(88, 55, 'X')}`)
    
console.log(`Área retângulo 22x15: ${calcular_area(22, 15)}`)
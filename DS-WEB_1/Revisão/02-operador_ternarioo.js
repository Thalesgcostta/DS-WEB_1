let media = 7.2, resultado

if(media >= 6){
    resultado = 'APROVADO'
}
else{
    resultado = 'REPROVADO'
}
console.log({media, resultado})

resultado = media >=6 ? 'APROVADO' : 'REPROVADO'
console.log({media, resultado})

let user = 'guest', msg

if(user === 'admin') msg = 'Login successful'
else msg = 'You are not allowed here'

console.log({user, msg})
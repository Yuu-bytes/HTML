let num = [5, 8, 2, 9, 3]

console.log(`Nosso vetor é o ${num}`)
console.log(num)
num[5] = 7

console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
num.sort()
num.push(1)
console.log(`Nosso vetor é o ${num}`)

let pos = num.indexOf(4)
if (pos == -1){
    console.log("O valor não foi encontrado")
} else {
console.log(`O valor 8 está na posição ${pos}`)
}

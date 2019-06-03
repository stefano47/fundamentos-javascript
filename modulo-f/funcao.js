function parimp(num){
    if(num % 2 === 0){
        return `o número ${num} é par.`
    } else {
        return `o número ${num} é ímpar.`
    }
}

let res = parimp(17)
console.log(res)

function soma(num1, num2 = 0){
    return num1 + num2
}
console.log(soma(6))

let v = function(x){
    x ** 2
}
console.log(v(5))

function fatorial(num){
    let fat = 1
    for(let c = num; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

function fat(num){
    if(num == 1){
        return 1
    } else {
        return num * fat(num - 1)
    }
}

console.log(fat(5))
let aluno = {
    nome: 'Stefano',
    idade: 23,
    genero: 'masculino',
    peso: 120.3,
    humano: true,
    engordar(p){
        console.log('Engordou')
        this.peso += p
    }
}

aluno.engordar(2)

console.log(aluno.nome)
console.log(aluno)
console.log(aluno.peso)
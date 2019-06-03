function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if(fAno.value.length == 0 || fAno.value > ano){
        alert('[ERRO]Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsexo')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')

        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'homem-bb.png')
            } else if(idade < 21){
                // Jovem
                img.setAttribute('src', 'homem-jovem.png')
            } else if(idade < 50){
                // Adulto
                img.setAttribute('src', 'homem-adulto.png')
            } else {
                // idoso
                img.setAttribute('src', 'homem-velho.png')
            }
        } else {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'mulher-bb.png')
            } else if(idade < 21){
                img.setAttribute('src', 'mulher-jovem.png')
            } else if(idade < 50){
                img.setAttribute('src', 'mulher-adulta.png')
            } else {
                // idoso
                img.setAttribute('src', 'mulher-velha.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com idade ${idade} anos.`
        res.appendChild(img)
    }
}
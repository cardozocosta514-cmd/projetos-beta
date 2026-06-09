function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('idade')
    var resultado = document.getElementById('resultado')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sexo = document.getElementById('masculino')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (sexo.checked) {
            genero = 'Homem'
        } else {
            genero = 'Mulher'
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.style.textAlign = 'center'
    }
}
      
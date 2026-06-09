function carregar (){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    msg.innerHTML = `Agora são ${hora} horas, ${minuto} minutos e ${segundo} segundos.`

        if (hora >= 0 && hora < 12){
    document.body.style.backgroundColor = '#4f4d72'
    img.style.filter = 'drop-shadow(0 0 15px #4e4f70)'        
    img.src = 'img/de manhã.png'
    //BOM DIA

    }   else if (hora >= 12 && hora <= 18){
    img.src = 'img/de tarde.png'
    document.body.style.backgroundColor = '#cc6f31'
    img.style.filter = 'drop-shadow(0 0 10px #774725)'
    //BOA TARDE

    }   else {
    img.src = 'img/de noite.png'
    document.body.style.backgroundColor = '#0f122e'
    img.style.filter = 'drop-shadow(0 0 10px #080c15)'
    
    //BOA NOITE
    }
}
setInterval(carregar, 1000)
function gerarTabuada() {
    var num = document.getElementById('num').value;
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    if (num === '') {
        alert('Por favor, digite um número para gerar a tabuada.');
        return;
    }
    resultado.style.display = 'block';  
    
    for (var i = 1; i <= 10 ; i++) {
    var item = document.createElement('option');
    item.text = `${num} x ${i} = ${num * i}`;
    resultado.appendChild(item);
    }   
}    
    
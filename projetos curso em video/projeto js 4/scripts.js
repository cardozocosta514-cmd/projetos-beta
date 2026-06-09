function contar() {

var start = Number(document.getElementById('inicio').value)
var end = Number(document.getElementById('fim').value)
var step = Number(document.getElementById('passo').value)
var res = document.getElementById('res')

res.innerHTML = ''

if (step <= 0) {
    alert('Passo inválido! Considerando PASSO 1')
    step = 1
}
if (start > end) {
    alert('Seu inicio é maior que o fim! Erro de contagem!')
}
for (var i = start; i <= end; i += step) {
    res.innerHTML += `${i}${i + step <= end ? ' → ' : '🏁'}`;
}

}
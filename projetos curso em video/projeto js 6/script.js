let res = document.getElementById('res');
function adicionarNumero() {
    const Input = document.getElementById('num');
    const numInput = Number(Input.value);

    if (isNaN(numInput) || numInput < 1 || numInput > 100) {
        alert('Por favor, digite um número válido entre 1 e 100.');
        return;
    }
    else if (document.getElementById('resultado').options.namedItem(numInput)) {
        alert('Este número já foi adicionado.');
        return;
    }
    else if (Input.value === '') {
        alert('Por favor, digite um número.');
        return;
    }
    else if (Array.from(document.getElementById('resultado').options).some(o => Number(o.value) === numInput)) {
        alert('Número já adicionado.');
        return;
    }

    const option = document.createElement('option');
    option.value = String(numInput);
    option.text = `Número ${numInput} adicionado.`;
    document.getElementById('resultado').appendChild(option);
    Input.value = '';
    Input.focus();
}
function finalizarAnalisador() {
    const select = document.getElementById('resultado');
    if (select.options.length === 0) {
        alert('Nenhum número foi adicionado. Por favor, adicione pelo menos um número antes de finalizar.');
        return;
    } else {
        let total = select.options.length;
        let maior = Number(select.options[0].value);
        let menor = Number(select.options[0].value);

        for (let i = 1; i < select.options.length; i++) {
            if (Number(select.options[i].value) > maior) {
                maior = Number(select.options[i].value);
            }
            if (Number(select.options[i].value) < menor) {
                menor = Number(select.options[i].value);
            }
        }

        let média = 0;
        for (let i = 0; i < select.options.length; i++) {
            média += Number(select.options[i].value);
        }

        média /= select.options.length;

        res.innerHTML = `<p>Ao todo, temos ${total} números cadastrados.</p>`;

        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;

        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        
        res.innerHTML += `<p>A média dos valores informados foi ${média.toFixed(2)}.</p>`;

    }
    const numeros = [];
    for (let i = 0; i < select.options.length; i++) {
        numeros.push(Number(select.options[i].value));
    }

}
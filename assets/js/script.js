

document.querySelector('#range').addEventListener('input', function () {
    var value = this.value;
    var effect = document.getElementById('dv-effect');
    var infoNovidade = document.getElementById('informacoes_novidade');
    var imagem = document.querySelector('.estilo_tattoo_nestilo');

    effect.style.boxShadow = '0 0 20px rgba(0, 0, 0, ' + (100 - value) / 100 + ')';
    infoNovidade.style.display = value < 50 ? "block" : "none";
    
    imagem.style.opacity = 1 - value / 100;
});

document.querySelector('#range').addEventListener('input', range => {
    changeWidth(range.target.value);
});


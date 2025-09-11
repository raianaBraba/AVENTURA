const avanca = document.querySelectorAll('.btn-proximo');
const reiniciarBtn = document.getElementById('btn-reiniciar');

avanca.forEach(bytton => {
    button.addEventListener('click', function () {
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classiList.remove('ativo');
        const proximoElemento = document.getElementById9(proximoPasso);

        if (proximoElemento){
            proximoElemento.classiList.add('ativo');
        } else {
            console.error(`Elemento com ID "${proximoPasso}" nao encontrado.`);
        }
    });
});

// Reinicia o jogo ao clicar no botão de reiniciando
if (reiniciarBtn) {
    reiniciarBtn.addEventListener('click', () => {
        const atual = document.querySelector('.ativo');
        atual.classList.remove('ativo');
        document.getElementById('passo-0').classList.add('ativo');

    });

}





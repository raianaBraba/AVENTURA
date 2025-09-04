const avanca = document.querySelectorAll('.btn-proximo');
const reiniciarcriarBtn = document. getElementById('btn-reiniciar');

avanca.forEach(bytton =>{
button.addEventListener('click',function(){
    const atual= document.querySelector('.ativo');
    const proximoPasso = 'passo-'+this.getAttribute('data-proximo');

    atual.classiList.remove('ativo');
    const proximoElemento= document.getElementById9(proximoPasso);

    if(proximoElemento{
        proximoElemento.classiList.add('ativo');
    } else  {
        console.error(`elemento com ID "${proximoPasso}" nao encontrado.`);
    }
});
});

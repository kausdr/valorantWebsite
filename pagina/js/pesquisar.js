var botao = document.querySelector('#pesquisarbt')
var pesquisa = document.querySelector('#pesquisar-agente')

botao.addEventListener('click', function(){
    if(pesquisa.classList.contains('pesquisar-agente-ativo')){
        pesquisa.classList.remove('pesquisar-agente-ativo')
    }
    else{
        pesquisa.classList.add('pesquisar-agente-ativo')
    }
})


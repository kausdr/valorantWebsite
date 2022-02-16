var botao = document.querySelector('#pesquisarbt')
var pesquisa = document.querySelector('#pesquisar-agente')
var lista = document.querySelector('.lista-agentes')

botao.addEventListener('click', function(){
    if(pesquisa.classList.contains('pesquisar-agente-ativo')){
        pesquisa.classList.remove('pesquisar-agente-ativo')
    }
    else{
        pesquisa.classList.add('pesquisar-agente-ativo')
    }
})

botao.addEventListener('click', function(){
    if(lista.classList.contains('pesquisar-agente-ativo')){
        lista.classList.remove('pesquisar-agente-ativo')
    }
    else{
        lista.classList.add('pesquisar-agente-ativo')
    }
})


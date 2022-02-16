var campo = document.querySelector('#pesquisar-agente')

campo.addEventListener('input', function(){
    console.log(this.value)

    var agentes = document.querySelectorAll('.agenteLi')
    for(var i = 0; i<agentes.length; i++){

        var agente = agentes[i]
        var nome = agente.textContent

        var expressao = new RegExp(this.value,'i')

        if(!expressao.test(nome) && this.value.length > 0){
            agente.classList.add('hide')
        }
        else{
            agente.classList.remove('hide')
        }
    }
})


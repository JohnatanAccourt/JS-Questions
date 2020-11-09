// Delegação de eventos é quando alteramos com um evento vários elementos de forma dinâmica alterando, adicionando, o elemento de um parente e ainda continua funcionando

const lista = document.getElementById("listaDesordenada");

lista.addEventListener('click', function(e){
    console.log(e);
    const target = e.target;
    // Element.matches() é retornado verdadeiro ou falso,
    // nesse caso se o li está dentro do ul, ou seja, o target
    // se for verdadeiro ele vai mudar a cor do background da lista
    if(target.matches('li')){
        target.style.backgroundColor = 'red';
    }
})
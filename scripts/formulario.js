document.getElementById("formContato").addEventListener("submit", function(event){
    
    //Evita o carregamento da página
    event.preventDefault();

    //Captura dos dados
    let nome=document.getElementById("ipNome").value;
    let telefone=document.getElementById("ipNumero").value;
    let email=document.getElementById("ipEmail").value;
    let mensagem=document.getElementById("taMensagem").value;
    let tipoCarro=document.getElementById("slTipos").value;
    
    //Exibir os dados do formulário na mesma página
    let resultado=document.getElementById("resultado");
    resultado.innerHTML= `<h3>Dados recebidos:</h3> 
                          <p><strong>Nome: </strong>${nome}</p>
                          <p><strong>Telefone: </strong>${telefone}</p>
                          <p><strong>E-mail: </strong>${email}</p>
                          <p><strong>Mensagem: </strong>${mensagem}</p>
                          <p><strong>Tipo do carro: </strong>${tipoCarro}</p>`
                          resultado.classList.remove("hidden");

})
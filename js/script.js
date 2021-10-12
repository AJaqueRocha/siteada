document.getElementById("BotaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){

  if(document.getElementById("nome").value != "" &&
     document.getElementById("email").value != "" &&
     document.getElementById("telefone").value != "" ){

       var nome= document.getElementById("nome");
       var email= document.getElementById("email");
       var telefone= document.getElementById("telefone");

    alert("Tudo certo! Você receberá novidades por email!")
  }else{
    alert("Por favor, preencha os campos nome, email e telefone!")
  }
}

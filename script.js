function entrar(){

var usuário = document.getElementById("usuário").value;
var senha = document.getElementById("senha").value;
var lembrar = document.getElementById("lembrar").checked;

if(usuário == "victorsone" && senha == "SENAC") {
 window.location.href = "Portal.html";
} 
else {alert("Usuário ou senha incorretos");
}

}

function salvar(){

var plano = document.getElementById("plano").value


if(plano == ""){
document.getElementById("mensagem").innerHTML = "Altere algo para salvar"
} else {
document.getElementById("mensagem").innerHTML = "Mundança salva!"
}

}


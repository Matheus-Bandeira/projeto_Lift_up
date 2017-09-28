var titulo = document.querySelector("#titulo");
var botao = document.querySelector("#btnGravar");

titulo.addEventListener("click", function(){
	console.log("cliquei no titulo");
});

botao.addEventListener("click", function(event){
	event.preventDefault();
	console.log("Botao Clicado!");

	var form = document.querySelector("#formulario");

	var nome = form.nome.value;
	var email = form.email.value;
	var sexo = form.sexo.value;

	var contatoTr = document.createElement("tr")

	var nomeTd = document.createElement("td");
	var emailTd = document.createElement("td");
	var sexoTd = document.createElement("td");

	nomeTd.textContent = nome;
	emailTd.textContent = email;
	sexoTd.textContent = sexo;

	contatoTr.appendChild(nomeTd);
	contatoTr.appendChild(emailTd);
	contatoTr.appendChild(sexoTd);

	var table = document.querySelector("#table-body");
	table.appendChild(contatoTr);

	console.log(contatoTr);

});
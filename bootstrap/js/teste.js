var titulo = document.querySelector("#titulo");

titulo.addEventListener("click", function(){
	console.log("cliquei no titulo");
});

botao = document.querySelector("#btn");

botao.addEventListener("click", function(event){
	event.preventDefault();

	var formulario = document.querySelector("#formulario");

	var nome = formulario.nome.value;
	var email = formulario.email.value;
	var sexo = formulario.sexo.value;

	var contatoTr = document.createElement("tr");

	var nomeTd = document.createElement("td");
	var emailTd = document.createElement("td");
	var sexoTd = document.createElement("td");

	nomeTd.textContent = nome;
	emailTd.textContent = email;
	sexoTd.textContent = sexo;

	contatoTr.appendChild(nomeTd);
	contatoTr.appendChild(emailTd);
	contatoTr.appendChild(sexoTd);

	console.log(contatoTr);

	var tabela = document.querySelector("#table-body");

	tabela.appendChild(contatoTr);

	nome.textContent = "";
	email.textContent = "";
	sexo.textContent = "";
});

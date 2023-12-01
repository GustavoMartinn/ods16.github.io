list = JSON.parse(localStorage.getItem("lista")) || [];

const assuntoMap = {
  'paz': 'Paz',
  'justica': 'Justiça',
  'instituicoes': 'Instituições Eficazes',
}

function handleShowDeleteButton() {
  const deleteButton = document.getElementById("exclude-all");
  if (list.length === 0) {
    deleteButton.style.display = "none";
  }
}

function populateTable() {
    var table = document.getElementById("table-body");
    table.innerHTML = "";
    list.forEach(element => {
      const row = document.createElement("tr");
      const nome = document.createElement("td");
      const email = document.createElement("td");
      const telefone = document.createElement("td");
      const assunto = document.createElement("td");
      const mensagem = document.createElement("td");
      const exclude = document.createElement("td");
      
      const excludeButton = document.createElement("button");
      excludeButton.classList.add("btn-trash");
      const icon = document.createElement("i");
      icon.classList.add("trash");
      excludeButton.appendChild(icon);
      excludeButton.addEventListener("click", () => {
        list = list.filter(item => item.nome !== element.nome);
        localStorage.setItem("lista", JSON.stringify(list));
        populateTable();
        handleShowDeleteButton();
      });
      
      nome.innerText = element.nome;
      email.innerText = element.email;
      telefone.innerText = element.telefone;
      assunto.innerText = assuntoMap[element.assunto] || element.assunto;
      mensagem.innerText = element.mensagem;
      exclude.appendChild(excludeButton);

      row.appendChild(nome);
      row.appendChild(email);
      row.appendChild(telefone);
      row.appendChild(assunto);
      row.appendChild(mensagem);
      row.appendChild(exclude); 
      
      table.appendChild(row);
    });
}

function eraseList() {
  list = [];
  localStorage.setItem("lista", JSON.stringify(list));
  populateTable();
}

function searchList(){
  const input = document.getElementById("search-input").value;
  if (input != ""){
    list = list.filter(item => 
      item.nome.includes(input) || 
      item.email.includes(input) || 
      item.telefone.includes(input) || 
      item.assunto.includes(input) || 
      item.mensagem.includes(input)
    )
  } else {
    list = JSON.parse(localStorage.getItem("lista") || []);
  }
  populateTable();
}

const submitSearch = document.getElementById("search-button");
submitSearch.addEventListener("click", searchList);

const excludeAll = document.getElementById("exclude-all");
excludeAll.addEventListener("click", eraseList);
handleShowDeleteButton();

populateTable();
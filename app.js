let listaAmigos = [];

function adicionarAmigo() {
  let nome = document.getElementById("amigo").value.trim();
  if (nome === "") {
alert("Por favor, insira um nome.")
    document.getElementById("erro").innerText =
     "Por favor, insira um nome.";
    return;
  }
  if (listaAmigos.some((n) => n.toLowerCase() === nome.toLowerCase())) {
    alert("Esse nome já foi adicionado.")
    return;
  }

  listaAmigos.push(nome);
  const list = document.createElement("li");
  list.textContent = nome;
  const button = document.createElement("button");
  button.textContent = "X";
  button.style.marginLeft = "10px";
  button.onclick = function () {
    const index = listaAmigos.indexOf(nome);
    if (index > -1) {
      listaAmigos.splice(index, 1);
    }
    list.remove();
    habilitarReset();
  };
  list.appendChild(button);
  document.getElementById("listaAmigos").appendChild(list);
  document.getElementById("amigo").value = "";
  habilitarReset();
}

function sortearAmigo() {
  if (listaAmigos.length === 0) {
alert("Para sortear é necessário adicionar pelo menos 1 nome")
    document.getElementById("erro").innerText =
      "Para sortear é necessário adicionar pelo menos 1 nome.";
  } else {
    const index = Math.floor(Math.random() * listaAmigos.length);
    const sorteado = listaAmigos.splice(index, 1)[0];
    document.getElementById("resultado").innerText =
      `Seu amigo secreto é: ${sorteado}`;
    const ul = document.getElementById("listaAmigos");
    ul.removeChild(ul.children[index]);
  }
}

function limparLista() {
  listaAmigos = [];
  ["listaAmigos", "resultado", "erro"].forEach((id) => {
    document.getElementById(id).innerHTML = "";
  });
  habilitarReset();
}

function habilitarReset() {
  if (listaAmigos.length == 0) {
    document.getElementById("reset").setAttribute("disabled", true);
  } else {
    document.getElementById("reset").removeAttribute("disabled");
  }
}
document.getElementById("amigo").addEventListener("input", function () {
  document.getElementById("erro").innerText = "";
});
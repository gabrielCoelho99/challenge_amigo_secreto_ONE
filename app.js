//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array vazia para receber os nomes dos amigos
let amigos = [];

// Função para adicionar amigos
function adicionarAmigos() {
    let nomeAmigo = document.getElementById("amigo");
    let nome = nomeAmigo.value.trim();

    //Validação da entrada
    if (!nome) {
        alert ("Por favor, insira um nome.");
        return;
    }

    //Adicionar um  nome na arrya amigos
    amigos.push(nome);

    //limpar o campo após adicionar
    nomeAmigo.value = "";

    //Atualizando a lista
    atualizarLista();
}

// Função para atualizar a lista visualmente
function atualizarLista() {
    const lista = document.getElementById("listaAmigos"); // ID correto
    lista.innerHTML = amigos.map(nome => `<li>${nome}</li>`).join("");
}

// Sorteando amigo

function sortearAmigo() {
    //validar se tem amigos
    if (amigos.length === 0) {
        alert ("Adicione amigos antes de sortear!");
        return;
    }

    //Gerar um indice aleatório
    const indice = Math.floor(Math.random() * amigos.length);
    const sorteado = amigos [indice];

    // Mostrar o resultado
    document.getElementById("resultado").innerHTML = `<li class="sorteado">🎉 O amigo secreto é: <strong>${sorteado}</strong></li>`;
    }
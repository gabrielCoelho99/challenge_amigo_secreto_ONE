Amigo Secreto
Neste desafio, você desenvolverá uma aplicação que permita aos usuários inserir nomes de amigos em uma lista para, em seguida, realizar um sorteio aleatório e determinar quem é o "amigo secreto".

O usuário deverá adicionar nomes por meio de um campo de texto e de um botão "Adicionar".

Os nomes inseridos serão exibidos em uma lista visível na página, e ao finalizar, um botão "Sortear Amigo" selecionará um dos nomes de forma aleatória, exibindo o resultado na tela.

Funcionalidades:
Adicionar nomes: Os usuários escreverão o nome de um amigo em um campo de texto e o adicionarão a uma lista visível ao clicar em "Adicionar".

Validar entrada: Se o campo de texto estiver vazio, o programa exibirá um alerta solicitando um nome válido.

Visualizar a lista: Os nomes inseridos aparecerão em uma lista abaixo do campo de entrada.

Sorteio aleatório: Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na página.


Passo 1: Criar uma Array para armazenar os nomes 

Passo 2: Implementa uma função para agregar amigos

Implemente uma função para adicionar amigos
Desenvolva uma função que permita ao usuário inserir um nome no campo de texto e adicioná-lo à lista de amigos criada anteriormente.

Tarefas específicas:
Capturar o valor do campo de entrada: Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário.

Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.

Se estiver vazio, exiba um alerta com a mensagem de erro: "Por favor, insira um nome."

Atualizar o array de amigos: Se o valor for válido, adicione-o ao array que armazena os nomes dos amigos usando o método .push().

Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.

Passo 3: Implementa uma função para atualizar a lista de amigos

Crie uma função que percorra o array amigos e adicione cada nome como um elemento <li> dentro de uma lista HTML. Use innerHTML para limpar a lista antes de adicionar novos elementos.

Tarefas específicas:
Obter o elemento da lista: Utilize document.getElementById() ou document.querySelector() para selecionar a lista onde os amigos serão exibidos.

Limpar a lista existente: Defina lista.innerHTML = "" para garantir que não haja duplicados ao atualizar.

Percorrer o array: Use um loop for para percorrer o array amigos e criar elementos de lista (<li>) para cada nome.

Adicionar elementos à lista: Para cada amigo, crie um novo elemento de lista.

Passo 5: Implementa uma função para sortear os amigos

Escreva uma função que selecione aleatoriamente um dos nomes armazenados no array amigos.

Use Math.random() e Math.floor() para obter um índice aleatório.

Tarefas específicas:
Validar que há amigos disponíveis: Antes de sortear, verificar se o array amigos não está vazio.

Gerar um índice aleatório: Usar Math.random() e Math.floor() para selecionar um índice aleatório do array.

Obter o nome sorteado: Utilizar o índice aleatório para acessar o nome correspondente no array.

Mostrar o resultado: Atualizar o conteúdo do elemento de resultado usando document.getElementById() e innerHTML para exibir o amigo sorteado.

Passo 6: criar um README.md

Passo 7: publicar a página

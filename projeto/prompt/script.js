/* =========================================================
   EXEMPLO BÁSICO — CRUD via prompt()
   Tema: Lista de Tarefas (To-Do List)
   ---------------------------------------------------------
   Este é apenas um MODELO de estrutura. O aluno deve adaptar
   para o tema escolhido e melhorar a lógica conforme os
   requisitos do enunciado (filtros, validações etc.).
   ========================================================= */

// Array que guarda todas as tarefas. Cada tarefa é um objeto.
let tarefas = [];

// Função para gerar um ID único simples
function gerarId() {
    return Date.now();
}

// ---------- 1. CADASTRAR ----------
function cadastrarTarefa() {
    const descricao = prompt("Digite a descrição da tarefa:");

    // Validação: não pode ser vazio
    if (!descricao || descricao.trim() === "") {
        alert("Descrição inválida!");
        return;
    }

    const prioridade = prompt("Prioridade (alta / media / baixa):");
    if (!["alta", "media", "baixa"].includes(prioridade)) {
        alert("Prioridade inválida!");
        return;
    }

    const novaTarefa = {
        id: gerarId(),
        descricao: descricao.trim(),
        prioridade: prioridade,
        concluida: false
    };

    tarefas.push(novaTarefa);
    alert("Tarefa cadastrada com sucesso!");
}

// ---------- 2. LISTAR ----------
function listarTarefas() {
    if (tarefas.length === 0) {
        alert("Nenhuma tarefa cadastrada.");
        return;
    }

    let texto = "=== LISTA DE TAREFAS ===\n\n";
    for (let i = 0; i < tarefas.length; i++) {
        const t = tarefas[i];
        const status = t.concluida ? "✓" : " ";
        texto += `[${status}] ID: ${t.id} | ${t.descricao} (${t.prioridade})\n`;
    }

    alert(texto);
    console.log(tarefas); // também mostra no console
}

// ---------- 3. EDITAR ----------
function editarTarefa() {
    const id = Number(prompt("Digite o ID da tarefa que deseja editar:"));
    const tarefa = tarefas.find(t => t.id === id);

    if (!tarefa) {
        alert("Tarefa não encontrada!");
        return;
    }

    const novaDescricao = prompt("Nova descrição:", tarefa.descricao);
    if (novaDescricao && novaDescricao.trim() !== "") {
        tarefa.descricao = novaDescricao.trim();
    }

    const concluida = prompt("Concluída? (s/n):", tarefa.concluida ? "s" : "n");
    tarefa.concluida = concluida === "s";

    alert("Tarefa atualizada!");
}

// ---------- 4. REMOVER ----------
function removerTarefa() {
    const id = Number(prompt("Digite o ID da tarefa que deseja remover:"));
    const indice = tarefas.findIndex(t => t.id === id);

    if (indice === -1) {
        alert("Tarefa não encontrada!");
        return;
    }

    const confirmar = confirm(`Deseja remover "${tarefas[indice].descricao}"?`);
    if (confirmar) {
        tarefas.splice(indice, 1);
        alert("Tarefa removida!");
    }
}

// ---------- 5. FILTRAR ----------
function filtrarTarefas() {
    const filtro = prompt(
        "Filtrar por:\n" +
        "1 - Apenas pendentes\n" +
        "2 - Apenas concluídas\n" +
        "3 - Por prioridade"
    );

    let resultado = [];

    if (filtro === "1") {
        resultado = tarefas.filter(t => !t.concluida);
    } else if (filtro === "2") {
        resultado = tarefas.filter(t => t.concluida);
    } else if (filtro === "3") {
        const p = prompt("Qual prioridade? (alta / media / baixa)");
        resultado = tarefas.filter(t => t.prioridade === p);
    } else {
        alert("Opção inválida!");
        return;
    }

    if (resultado.length === 0) {
        alert("Nenhuma tarefa encontrada para esse filtro.");
        return;
    }

    let texto = "=== RESULTADO DO FILTRO ===\n\n";
    resultado.forEach(t => {
        const status = t.concluida ? "✓" : " ";
        texto += `[${status}] ${t.descricao} (${t.prioridade})\n`;
    });
    alert(texto);
}

// ---------- MENU PRINCIPAL ----------
function exibirMenu() {
    let opcao;

    do {
        opcao = prompt(
            "=== GERENCIADOR DE TAREFAS ===\n\n" +
            "1 - Cadastrar tarefa\n" +
            "2 - Listar tarefas\n" +
            "3 - Editar tarefa\n" +
            "4 - Remover tarefa\n" +
            "5 - Filtrar tarefas\n" +
            "0 - Sair"
        );

        switch (opcao) {
            case "1": cadastrarTarefa(); break;
            case "2": listarTarefas(); break;
            case "3": editarTarefa(); break;
            case "4": removerTarefa(); break;
            case "5": filtrarTarefas(); break;
            case "0": alert("Até logo!"); break;
            default: alert("Opção inválida!");
        }

    } while (opcao !== "0" && opcao !== null);
}

// Inicia o programa
exibirMenu();

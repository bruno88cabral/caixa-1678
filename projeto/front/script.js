/* =========================================================
   EXEMPLO BÁSICO — CRUD com formulário HTML
   Tema: Lista de Tarefas (To-Do List)
   ---------------------------------------------------------
   Estrutura mínima para servir de ponto de partida.
   O aluno deve adaptar para o seu tema e adicionar mais
   funcionalidades conforme o enunciado.
   ========================================================= */

// Array principal — armazena todas as tarefas
let tarefas = [];

// Referências aos elementos HTML (selecionadas uma única vez)
const inputId         = document.getElementById("tarefaId");
const inputDescricao  = document.getElementById("descricao");
const inputPrioridade = document.getElementById("prioridade");
const inputFiltro     = document.getElementById("filtro");
const listaTarefas    = document.getElementById("listaTarefas");
const tituloForm      = document.getElementById("tituloForm");

// ---------- CRIAR / EDITAR ----------
function salvarTarefa() {
    const descricao  = inputDescricao.value.trim();
    const prioridade = inputPrioridade.value;
    const id         = inputId.value;

    // Validação simples
    if (descricao === "") {
        alert("Digite uma descrição!");
        return;
    }

    if (id === "") {
        // Sem ID = nova tarefa
        const nova = {
            id: Date.now(),
            descricao: descricao,
            prioridade: prioridade,
            concluida: false
        };
        tarefas.push(nova);
    } else {
        // Com ID = editar tarefa existente
        const tarefa = tarefas.find(t => t.id === Number(id));
        if (tarefa) {
            tarefa.descricao  = descricao;
            tarefa.prioridade = prioridade;
        }
    }

    limparFormulario();
    renderizarTarefas();
}

// ---------- REMOVER ----------
function removerTarefa(id) {
    const confirmar = confirm("Deseja realmente remover esta tarefa?");
    if (!confirmar) return;

    tarefas = tarefas.filter(t => t.id !== id);
    renderizarTarefas();
}

// ---------- PREPARAR EDIÇÃO ----------
// Quando o usuário clica em "Editar", carregamos os dados no formulário.
function editarTarefa(id) {
    const tarefa = tarefas.find(t => t.id === id);
    if (!tarefa) return;

    inputId.value         = tarefa.id;
    inputDescricao.value  = tarefa.descricao;
    inputPrioridade.value = tarefa.prioridade;

    tituloForm.textContent = "Editando tarefa";
    inputDescricao.focus();
}

// ---------- ALTERNAR CONCLUÍDA ----------
function alternarConcluida(id) {
    const tarefa = tarefas.find(t => t.id === id);
    if (tarefa) {
        tarefa.concluida = !tarefa.concluida;
        renderizarTarefas();
    }
}

// ---------- LIMPAR FORMULÁRIO ----------
function limparFormulario() {
    inputId.value        = "";
    inputDescricao.value = "";
    inputPrioridade.value = "alta";
    tituloForm.textContent = "Nova tarefa";
}

// ---------- LISTAR / RENDERIZAR ----------
function renderizarTarefas() {
    const termoBusca = inputFiltro.value.toLowerCase();

    // Aplica o filtro de busca
    const listaFiltrada = tarefas.filter(t =>
        t.descricao.toLowerCase().includes(termoBusca)
    );

    // Limpa a tabela
    listaTarefas.innerHTML = "";

    if (listaFiltrada.length === 0) {
        listaTarefas.innerHTML = `
            <tr>
                <td colspan="4" style="text-align:center; color:#888;">
                    Nenhuma tarefa encontrada.
                </td>
            </tr>`;
        return;
    }

    // Monta uma linha para cada tarefa
    listaFiltrada.forEach(t => {
        const linha = document.createElement("tr");

        const classeDescricao = t.concluida ? "concluida" : "";

        linha.innerHTML = `
            <td>
                <input type="checkbox" ${t.concluida ? "checked" : ""}
                       onchange="alternarConcluida(${t.id})">
            </td>
            <td class="${classeDescricao}">${t.descricao}</td>
            <td>${t.prioridade}</td>
            <td>
                <button onclick="editarTarefa(${t.id})">Editar</button>
                <button class="perigo" onclick="removerTarefa(${t.id})">Remover</button>
            </td>
        `;

        listaTarefas.appendChild(linha);
    });
}

// Renderiza ao abrir a página (lista começa vazia)
renderizarTarefas();

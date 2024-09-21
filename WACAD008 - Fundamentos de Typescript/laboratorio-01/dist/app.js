"use strict";
class aFazer {
  constructor() {
    this.tarefas = [];
    this.counterId = 0;
    this.editarTarefaId = null;
    this.acoesBotao();
  }
  acoesBotao() {
    const botaoAdicionar = document.getElementById("adicionar");
    if (botaoAdicionar) {
      botaoAdicionar.onclick = () => this.adicionarEditarTarefa();
    } else {
      console.error("Deu b.o com o botão");
    }
  }
  adicionarEditarTarefa() {
    const tituloInput = document.getElementById("titulo");
    const dataLimiteInput = document.getElementById("dataLimite");
    const descricaoInput = document.getElementById("descricao");
    if (this.editarTarefaId !== null) {
      const tarefaEditada = [
        this.editarTarefaId,
        tituloInput.value,
        new Date(),
        dataLimiteInput.value ? new Date(dataLimiteInput.value) : undefined,
        descricaoInput.value || undefined,
      ];
      const index = this.tarefas.findIndex(
        (tarefa) => tarefa[0] === this.editarTarefaId
      );
      if (index > -1) {
        this.tarefas[index] = tarefaEditada;
      }
      this.editarTarefaId = null;
      document.getElementById("adicionar").textContent = "Adicionar";
    } else {
      const novoTarefa = [
        this.counterId++,
        tituloInput.value,
        new Date(),
        dataLimiteInput.value ? new Date(dataLimiteInput.value) : undefined,
        descricaoInput.value || undefined,
      ];
      this.tarefas.push(novoTarefa);
    }
    this.exibirTarefas();
    this.limparFormulario();
  }
  exibirTarefas() {
    const listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = "";
    this.tarefas.forEach((tarefa) => {
      var _a;
      const li = document.createElement("li");
      const titulo = document.createElement("h3");
      titulo.textContent = `${
        tarefa[1]
      } - Criada em: ${tarefa[2].toLocaleString()}`;
      li.appendChild(titulo);
      if (tarefa[4]) {
        const descricao = document.createElement("p");
        descricao.textContent = `Descrição: ${tarefa[4]}`;
        li.appendChild(descricao);
      }
      if (tarefa[3]) {
        const dataLimite = document.createElement("p");
        dataLimite.textContent = `Data limite: ${
          (_a = tarefa[3]) === null || _a === void 0
            ? void 0
            : _a.toLocaleString()
        }`;
        li.appendChild(dataLimite);
      }
      const botaoEditar = this.criarBotaoEditar(tarefa);
      li.appendChild(botaoEditar);
      const botaoExcluir = this.criarBotaoExcluir(tarefa[0]);
      li.appendChild(botaoExcluir);
      listaTarefas.appendChild(li);
    });
  }
  criarBotaoEditar(tarefa) {
    const botao = document.createElement("button");
    botao.textContent = "Editar";
    botao.onclick = () => this.editarTarefa(tarefa[0]);
    return botao;
  }
  criarBotaoExcluir(id) {
    const botao = document.createElement("button");
    botao.textContent = "Excluir";
    botao.onclick = () => this.excluirTarefa(id);
    return botao;
  }
  editarTarefa(id) {
    const tarefa = this.tarefas.find((tarefa) => tarefa[0] === id);
    if (tarefa) {
      const tituloInput = document.getElementById("titulo");
      const dataLimiteInput = document.getElementById("dataLimite");
      const descricaoInput = document.getElementById("descricao");
      tituloInput.value = tarefa[1];
      descricaoInput.value = tarefa[4] || "";
      if (tarefa[3]) {
        dataLimiteInput.value = tarefa[3].toISOString().slice(0, 16);
      } else {
        dataLimiteInput.value = "";
      }
      this.editarTarefaId = id;
      document.getElementById("adicionar").textContent = "Salvar";
    }
  }
  excluirTarefa(id) {
    this.tarefas = this.tarefas.filter((tarefa) => tarefa[0] !== id);
    this.exibirTarefas();
  }
  limparFormulario() {
    document.getElementById("titulo").value = "";
    document.getElementById("dataLimite").value = "";
    document.getElementById("descricao").value = "";
    this.editarTarefaId = null;
  }
}
const app = new aFazer();

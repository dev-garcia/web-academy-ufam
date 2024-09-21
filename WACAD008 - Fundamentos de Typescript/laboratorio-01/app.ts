type Tarefa = [number, string, Date, Date?, string?];

class aFazer {
  private tarefas: Tarefa[] = [];
  private counterId: number = 0;
  private editarTarefaId: number | null = null;

  constructor() {
    this.acoesBotao();
  }

  private acoesBotao(): void {
    const botaoAdicionar = document.getElementById(
      "adicionar"
    ) as HTMLButtonElement;

    if (botaoAdicionar) {
      botaoAdicionar.onclick = () => this.adicionarEditarTarefa();
    } else {
      console.error("Deu b.o com o botão");
    }
  }

  private adicionarEditarTarefa(): void {
    const tituloInput = document.getElementById("titulo") as HTMLInputElement;
    const dataLimiteInput = document.getElementById(
      "dataLimite"
    ) as HTMLInputElement;
    const descricaoInput = document.getElementById(
      "descricao"
    ) as HTMLTextAreaElement;

    if (this.editarTarefaId !== null) {
      const tarefaEditada: Tarefa = [
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
      (document.getElementById("adicionar") as HTMLButtonElement).textContent =
        "Adicionar";
    } else {
      const novoTarefa: Tarefa = [
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

  private exibirTarefas(): void {
    const listaTarefas = document.getElementById(
      "listaTarefas"
    ) as HTMLUListElement;
    listaTarefas.innerHTML = "";

    this.tarefas.forEach((tarefa) => {
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
        dataLimite.textContent = `Data limite: ${tarefa[3]?.toLocaleString()}`;
        li.appendChild(dataLimite);
      }

      const botaoEditar = this.criarBotaoEditar(tarefa);
      li.appendChild(botaoEditar);

      const botaoExcluir = this.criarBotaoExcluir(tarefa[0]);
      li.appendChild(botaoExcluir);

      listaTarefas.appendChild(li);
    });
  }

  private criarBotaoEditar(tarefa: Tarefa): HTMLButtonElement {
    const botao = document.createElement("button");
    botao.textContent = "Editar";
    botao.onclick = () => this.editarTarefa(tarefa[0]);
    return botao;
  }

  private criarBotaoExcluir(id: number): HTMLButtonElement {
    const botao = document.createElement("button");
    botao.textContent = "Excluir";
    botao.onclick = () => this.excluirTarefa(id);
    return botao;
  }

  private editarTarefa(id: number): void {
    const tarefa = this.tarefas.find((tarefa) => tarefa[0] === id);
    if (tarefa) {
      const tituloInput = document.getElementById("titulo") as HTMLInputElement;
      const dataLimiteInput = document.getElementById(
        "dataLimite"
      ) as HTMLInputElement;
      const descricaoInput = document.getElementById(
        "descricao"
      ) as HTMLTextAreaElement;

      tituloInput.value = tarefa[1];
      descricaoInput.value = tarefa[4] || "";
      if (tarefa[3]) {
        dataLimiteInput.value = tarefa[3].toISOString().slice(0, 16); // Ajuste de formatação de data para datetime-local
      } else {
        dataLimiteInput.value = "";
      }

      this.editarTarefaId = id;
      (document.getElementById("adicionar") as HTMLButtonElement).textContent =
        "Salvar";
    }
  }

  private excluirTarefa(id: number): void {
    this.tarefas = this.tarefas.filter((tarefa) => tarefa[0] !== id);
    this.exibirTarefas();
  }

  private limparFormulario(): void {
    (document.getElementById("titulo") as HTMLInputElement).value = "";
    (document.getElementById("dataLimite") as HTMLInputElement).value = "";
    (document.getElementById("descricao") as HTMLTextAreaElement).value = "";
    this.editarTarefaId = null;
  }
}

const app = new aFazer();

class Aluno {
  constructor(
    public id: number,
    public nome: string,
    public idade: number,
    public altura: number,
    public peso: number
  ) {}
}

class Turma {
  private alunos: Aluno[] = [];

  constructor(public id: number, public nome: string) {}

  public getAlunos(): Aluno[] {
    return this.alunos;
  }

  public adicionarEditarAluno(aluno: Aluno) {
    const alunoExistente = this.alunos.find((a) => a.id === aluno.id);

    if (alunoExistente) {
      alunoExistente.nome = aluno.nome;
      alunoExistente.idade = aluno.idade;
      alunoExistente.altura = aluno.altura;
      alunoExistente.peso = aluno.peso;
    } else {
      this.alunos.push(aluno);
    }

    this.atualizarEstatisticas();
  }

  public removerAluno(id: number) {
    this.alunos = this.alunos.filter((aluno) => aluno.id !== id);
    this.atualizarEstatisticas();
  }

  public getNumAlunos(): number {
    return this.alunos.length;
  }

  public getMediaIdades(): number {
    const totalIdade = this.alunos.reduce((sum, aluno) => sum + aluno.idade, 0);
    return this.alunos.length ? totalIdade / this.alunos.length : 0;
  }

  public getMediaAlturas(): number {
    const totalAltura = this.alunos.reduce(
      (sum, aluno) => sum + aluno.altura,
      0
    );
    return this.alunos.length ? totalAltura / this.alunos.length : 0;
  }

  public getMediaPesos(): number {
    const totalPeso = this.alunos.reduce((sum, aluno) => sum + aluno.peso, 0);
    return this.alunos.length ? totalPeso / this.alunos.length : 0;
  }

  public atualizarEstatisticas() {
    (document.getElementById("numAlunos") as HTMLSpanElement).textContent =
      this.getNumAlunos().toString();
    (document.getElementById("mediaIdades") as HTMLSpanElement).textContent =
      this.getMediaIdades().toFixed(2);
    (document.getElementById("mediaAlturas") as HTMLSpanElement).textContent =
      this.getMediaAlturas().toFixed(2);
    (document.getElementById("mediaPesos") as HTMLSpanElement).textContent =
      this.getMediaPesos().toFixed(2);
  }
}

const turma = new Turma(1, "Turma 4 - Web Academy");

const alunoForm = document.getElementById("alunoForm") as HTMLFormElement;
const listaAlunos = document.getElementById("listaAlunos") as HTMLUListElement;
const alunoAutoId = document.getElementById("alunoId") as HTMLInputElement;
const alunoNome = document.getElementById("nome") as HTMLInputElement;
const alunoIdade = document.getElementById("idade") as HTMLInputElement;
const alunoAltura = document.getElementById("altura") as HTMLInputElement;
const alunoPeso = document.getElementById("peso") as HTMLInputElement;
const submitButton = document.getElementById(
  "submitButton"
) as HTMLButtonElement;

alunoForm.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  const nome = alunoNome.value;
  const idade = parseInt(alunoIdade.value);
  const altura = parseFloat(alunoAltura.value);
  const peso = parseFloat(alunoPeso.value);
  let alunoId = parseInt(alunoAutoId.value);

  if (!alunoId) {
    alunoId = Date.now();
  }

  const novoAluno = new Aluno(alunoId, nome, idade, altura, peso);
  turma.adicionarEditarAluno(novoAluno);

  atualizarListaAlunos();

  alunoForm.reset();
  alunoAutoId.value = "";
  submitButton.textContent = "Adicionar Aluno";
});

function atualizarListaAlunos() {
  listaAlunos.innerHTML = "";
  turma.getAlunos().forEach((aluno) => {
    const li = document.createElement("li");
    li.textContent = `${aluno.nome} - ${aluno.idade} anos, ${aluno.altura} cm, ${aluno.peso} kg`;

    const botaoEditar = document.createElement("button");
    botaoEditar.textContent = "Editar";
    botaoEditar.addEventListener("click", () => {
      alunoNome.value = aluno.nome;
      alunoIdade.value = aluno.idade.toString();
      alunoAltura.value = aluno.altura.toString();
      alunoPeso.value = aluno.peso.toString();
      alunoAutoId.value = aluno.id.toString();
      submitButton.textContent = "Salvar";
    });

    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.addEventListener("click", () => {
      turma.removerAluno(aluno.id);
      atualizarListaAlunos();
    });

    li.appendChild(botaoEditar);
    li.appendChild(botaoExcluir);
    listaAlunos.appendChild(li);
  });
}

"use strict";
class Aluno {
  constructor(id, nome, idade, altura, peso) {
    this.id = id;
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
  }
}
class Turma {
  constructor(id, nome) {
    this.id = id;
    this.nome = nome;
    this.alunos = [];
  }
  getAlunos() {
    return this.alunos;
  }
  adicionarEditarAluno(aluno) {
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
  removerAluno(id) {
    this.alunos = this.alunos.filter((aluno) => aluno.id !== id);
    this.atualizarEstatisticas();
  }
  getNumAlunos() {
    return this.alunos.length;
  }
  getMediaIdades() {
    const totalIdade = this.alunos.reduce((sum, aluno) => sum + aluno.idade, 0);
    return this.alunos.length ? totalIdade / this.alunos.length : 0;
  }
  getMediaAlturas() {
    const totalAltura = this.alunos.reduce(
      (sum, aluno) => sum + aluno.altura,
      0
    );
    return this.alunos.length ? totalAltura / this.alunos.length : 0;
  }
  getMediaPesos() {
    const totalPeso = this.alunos.reduce((sum, aluno) => sum + aluno.peso, 0);
    return this.alunos.length ? totalPeso / this.alunos.length : 0;
  }
  atualizarEstatisticas() {
    document.getElementById("numAlunos").textContent =
      this.getNumAlunos().toString();
    document.getElementById("mediaIdades").textContent =
      this.getMediaIdades().toFixed(2);
    document.getElementById("mediaAlturas").textContent =
      this.getMediaAlturas().toFixed(2);
    document.getElementById("mediaPesos").textContent =
      this.getMediaPesos().toFixed(2);
  }
}
const turma = new Turma(1, "Turma 4 - Web Academy");
const alunoForm = document.getElementById("alunoForm");
const listaAlunos = document.getElementById("listaAlunos");
const alunoAutoId = document.getElementById("alunoId");
const alunoNome = document.getElementById("nome");
const alunoIdade = document.getElementById("idade");
const alunoAltura = document.getElementById("altura");
const alunoPeso = document.getElementById("peso");
const submitButton = document.getElementById("submitButton");
alunoForm.addEventListener("submit", (event) => {
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

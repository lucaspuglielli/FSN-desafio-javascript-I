// Base a ser utilizada
const alunosDaEscola = [
	{ nome: "Henrique", notas: [], cursos: [], faltas: 5 },
	{ nome: "Edson", notas: [], cursos: [], faltas: 2 },
	{ nome: "Bruno", notas: [10, 9.8, 9.6], cursos: [], faltas: 0 },
	{
		nome: "Guilherme",
		notas: [10, 9.8, 9.6],
		cursos: [{ nomeDoCurso: "Full Stack", dataMatricula: new Date() }],
		faltas: 0
	},
	{ nome: "Carlos", notas: [], cursos: [], faltas: 0 },
	{
		nome: "Lucca",
		notas: [10, 9.8, 9.6],
		cursos: [{ nomeDoCurso: "UX", dataMatricula: new Date() }],
		faltas: 0
	}
];

// implementação

function adicionarAluno(nome) {
	/*Essa função irá receber uma *string* que é nome do aluno a ser criado. 
    E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
    A função deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.*/
	let notas = [];
	let cursos = [];
	let faltas = 0;
	let aluno = { nome, notas, cursos, faltas };
	if (typeof nome == "string") {
		alunosDaEscola.push(aluno);
		console.log(nome + " cadastrado com sucesso!");
	} else {
		console.log("Nome inválido");
	}
}

// adicionarAluno("Jobsonberto")
// console.log(alunosDaEscola)

function listarAlunos() {
	/*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
    Vale dizer que As informações deverão ser exibidas em um formato amigável.*/
	for (let i = 0; i < alunosDaEscola.length; i++) {
		console.log("_________________");
		console.log("");
		console.log("Nome: " + alunosDaEscola[i].nome);
		if (alunosDaEscola[i].notas != "") {
			console.log("Notas: " + alunosDaEscola[i].notas);
		} else {
			console.log("Notas: Nenhuma nota cadastrada");
		}
		if (alunosDaEscola[i].cursos.length != 0) {
			console.log("Curso: " + alunosDaEscola[i].cursos[0].nomeDoCurso);
		} else {
			console.log("Curso: Nenhum curso cadastrado");
		}
		if (alunosDaEscola[i].cursos.length != 0) {
			console.log("Matriculado: " + alunosDaEscola[i].cursos[0].dataMatricula);
		} else {
			console.log("Matriculado: Nenhuma data cadastrada");
		}
		console.log("Faltas: " + alunosDaEscola[i].faltas);
	}
	console.log("_________________");
}

// listarAlunos()

function buscarAluno(nome) {
	/* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno. Ela deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não encontrar. E deverá devolver um aluno em seu retorno. */
	if (typeof nome == "string") {
		let busca = alunosDaEscola.filter(aluno => aluno.nome == nome);
		if (busca.length != 0) {
			console.log("O aluno " + nome + " foi encontrado.");
		} else {
			console.log("O aluno " + nome + " não foi encontrado.");
			return busca;
		}
	} else {
		console.log("Nome inválido");
	}
}

// buscarAluno("Carlos")

function matricularAluno(aluno, nomeDoCurso) {
	/* Essa funcionalidade irá permitir, cadastrar um aluno em um curso.
    Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, e deverá armazenar a data atual no momento da matricula
    Lembre-se de exibir o feedback para o usuário. */
	let busca = alunosDaEscola.filter(alunoNome => alunoNome.nome == aluno.nome);
	if (busca.length != 0) {
		for (let i = 0; i < alunosDaEscola.length; i++) {
			if (alunosDaEscola[i].nome == aluno.nome) {
				let dataMatricula = new Date();
				alunosDaEscola[i].cursos.push({ nomeDoCurso, dataMatricula });
				console.log("Aluno matriculado com sucesso!");
			}
		}
	} else {
		console.log("Falha ao matricular o aluno");
	}
}

// matricularAluno({ nome: "Carlos" }, "batatinha");
// listarAlunos()

function aplicarFalta(aluno) {
	/*Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.*/
	let busca = alunosDaEscola.filter(alunoNome => alunoNome.nome == aluno.nome);
	if (busca.length != 0) {
		for (let i = 0; i < alunosDaEscola.length; i++) {
			if (alunosDaEscola[i].nome == aluno.nome) {
				alunosDaEscola[i].faltas += 1;
				console.log("Falta registrada com sucesso!");
			}
		}
	} else {
		console.log("Falha ao registrar falta do aluno");
	}
}

// aplicarFalta({ nome: "Carlos" });
// listarAlunos()

function aplicarNota(aluno, nota) {
	/*Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá adicionar uma nota ao aluno na sua lista de notas. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.*/
	let busca = alunosDaEscola.filter(alunoNome => alunoNome.nome == aluno.nome);
	if (busca.legth != 0) {
		for (let i = 0; i < alunosDaEscola.length; i++) {
			if (alunosDaEscola[i].nome == aluno.nome) {
				alunosDaEscola[i].notas.push(nota);
				console.log("Nota registrada com sucesso!");
			}
		}
	} else {
		console.log("Falha ao registrar a nota do aluno");
	}
}

// aplicarNota({nome:"Carlos"},9.8)
// listarAlunos()

function aprovarAluno(aluno) {
	/*Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se o mesmo está aprovado ou não. Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
    Só o aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso.*/
	let busca = alunosDaEscola.filter(alunoNome => alunoNome.nome == aluno.nome);
	if (busca.length != false) {
		for (let i = 0; i < alunosDaEscola.length; i++) {
			if (alunosDaEscola[i].nome == aluno.nome) {
				if (alunosDaEscola[i].notas != "") {
					let media = alunosDaEscola[i].notas.reduce(
						(resultado, numeros) => resultado + numeros
					);
					let mediaFinal = media / alunosDaEscola[i].notas.length;
					if (
						mediaFinal >= 7 &&
						alunosDaEscola[i].faltas <= 3 &&
						alunosDaEscola[i].cursos != ""
					) {
						console.log("Aluno Aprovado!");
					} else {
						console.log("Aluno reprovado!");
					}
				} else {
					console.log("Aluno reprovado!");
				}
			}
		}
	} else {
		console.log("Aluno não encontrado");
	}
}

// aprovarAluno({ nome: "Lucca" });